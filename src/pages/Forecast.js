import React, { useEffect, useState } from 'react';
import { Container, Card, CardContent, Typography, CircularProgress, Alert, TextField, Button } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { getForecast } from '../api/api';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Forecast() {
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [days, setDays] = useState(3);

  const fetchForecast = () => {
    setLoading(true);
    setError(null);
    getForecast(days)
      .then(res => {
        if (res.data.status === 'error') {
          setError(res.data.message || 'Model not trained. Please train the model first.');
          setForecast([]);
        } else {
          setForecast(res.data.data || []);
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch forecast.');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchForecast();
    // eslint-disable-next-line
  }, []);

  const chartData = {
    labels: forecast.map(f => new Date(f.timestamp * 1000).toLocaleString()),
    datasets: [
      {
        label: 'Forecasted AQI',
        data: forecast.map(f => f.aqi),
        borderColor: '#388e3c',
        backgroundColor: 'rgba(56,142,60,0.2)',
        tension: 0.2,
      },
    ],
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            AQI Forecast
          </Typography>
          <form
            onSubmit={e => {
              e.preventDefault();
              fetchForecast();
            }}
            style={{ marginBottom: 16 }}
          >
            <TextField
              label="Days"
              type="number"
              value={days}
              onChange={e => setDays(Number(e.target.value))}
              inputProps={{ min: 1, max: 7 }}
              sx={{ width: 100, mr: 2 }}
            />
            <Button type="submit" variant="contained" color="primary">
              Get Forecast
            </Button>
          </form>
          {loading && <CircularProgress />}
          {error && <Alert severity="error">{error}</Alert>}
          {forecast.length > 0 && !error && (
            <Line data={chartData} />
          )}
        </CardContent>
      </Card>
    </Container>
  );
}

export default Forecast; 