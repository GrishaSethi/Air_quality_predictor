import React, { useEffect, useState } from 'react';
import { Container, Card, CardContent, Typography, CircularProgress, Alert } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { getHistory } from '../api/api';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getHistory()
      .then(res => {
        setHistory(res.data.data || []);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch history.');
        setLoading(false);
      });
  }, []);

  const chartData = {
    labels: history.map(h => new Date(h.timestamp * 1000).toLocaleString()),
    datasets: [
      {
        label: 'AQI',
        data: history.map(h => h.aqi),
        borderColor: '#43a047',
        backgroundColor: 'rgba(67,160,71,0.2)',
        tension: 0.2,
      },
    ],
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            AQI History
          </Typography>
          {loading && <CircularProgress />}
          {error && <Alert severity="error">{error}</Alert>}
          {history.length > 0 && (
            <Line data={chartData} />
          )}
        </CardContent>
      </Card>
    </Container>
  );
}

export default History; 