import React, { useEffect, useState } from 'react';
import { Container, Card, CardContent, Typography, CircularProgress, Alert } from '@mui/material';
import { getCurrentAQI } from '../api/api';

function Current() {
  const [aqi, setAqi] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCurrentAQI()
      .then(res => {
        setAqi(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch current AQI.');
        setLoading(false);
      });
  }, []);

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Current Air Quality Index (AQI)
          </Typography>
          {loading && <CircularProgress />}
          {error && <Alert severity="error">{error}</Alert>}
          {aqi && aqi.status === 'success' && (
            <>
              <Typography variant="h4" color="primary" gutterBottom>
                AQI: {aqi.aqi}
              </Typography>
              <Typography variant="h6" color={aqi.color}>
                {aqi.level}
              </Typography>
              <Typography variant="body1">{aqi.description}</Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>
                Last updated: {aqi.datetime}
              </Typography>
            </>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}

export default Current; 