import React, { useEffect, useState } from 'react';
import { Container, Card, CardContent, Typography, CircularProgress, Alert, TextField, Button } from '@mui/material';
import { getAnomalies } from '../api/api';

function Anomalies() {
  const [anomalies, setAnomalies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [window, setWindow] = useState(24);
  const [threshold, setThreshold] = useState(2.0);

  const fetchAnomalies = () => {
    setLoading(true);
    setError(null);
    getAnomalies(window, threshold)
      .then(res => {
        setAnomalies(res.data.data || []);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch anomalies.');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAnomalies();
    // eslint-disable-next-line
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            AQI Anomalies
          </Typography>
          <form
            onSubmit={e => {
              e.preventDefault();
              fetchAnomalies();
            }}
            style={{ marginBottom: 16 }}
          >
            <TextField
              label="Window Size"
              type="number"
              value={window}
              onChange={e => setWindow(Number(e.target.value))}
              inputProps={{ min: 1, max: 120 }}
              sx={{ width: 120, mr: 2 }}
            />
            <TextField
              label="Threshold"
              type="number"
              value={threshold}
              onChange={e => setThreshold(Number(e.target.value))}
              inputProps={{ min: 0.5, max: 5, step: 0.1 }}
              sx={{ width: 120, mr: 2 }}
            />
            <Button type="submit" variant="contained" color="primary">
              Detect
            </Button>
          </form>
          {loading && <CircularProgress />}
          {error && <Alert severity="error">{error}</Alert>}
          {anomalies.length > 0 ? (
            <div>
              <Typography variant="subtitle1">
                Detected {anomalies.length} anomalies:
              </Typography>
              {anomalies.map((a, i) => (
                <Typography key={i} variant="body2">
                  {new Date(a.timestamp * 1000).toLocaleString()} — AQI: {a.aqi}, Z-score: {a.z_score && a.z_score.toFixed(2)}
                </Typography>
              ))}
            </div>
          ) : (
            !loading && <Typography>No anomalies detected.</Typography>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}

export default Anomalies; 