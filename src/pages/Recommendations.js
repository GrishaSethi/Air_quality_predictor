import React, { useEffect, useState } from 'react';
import { Container, Card, CardContent, Typography, CircularProgress, Alert, Box } from '@mui/material';
import { getRecommendations } from '../api/api';

function Recommendations() {
  const [recs, setRecs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getRecommendations()
      .then(res => {
        if (res.data.status === 'error') {
          setError(res.data.message || 'Model not trained. Please train the model first.');
          setRecs(null);
        } else {
          setRecs(res.data.data);
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch recommendations.');
        setLoading(false);
      });
  }, []);

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Health Recommendations
          </Typography>
          {loading && <CircularProgress />}
          {error && <Alert severity="error">{error}</Alert>}
          {recs && !error && (
            <Box>
              <Typography variant="h6" gutterBottom>
                Current AQI: {recs.current_aqi} ({recs.current_level.level})
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>General Advice:</strong> {recs.general_advice}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Sensitive Groups:</strong> {recs.sensitive_groups}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Outdoor Activities:</strong> {recs.outdoor_activities}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Ventilation:</strong> {recs.ventilation}
              </Typography>
              {recs.forecast_warning && (
                <Alert severity="warning" sx={{ mt: 2 }}>
                  {recs.forecast_warning}
                </Alert>
              )}
              {recs.forecast_improvement && (
                <Alert severity="success" sx={{ mt: 2 }}>
                  {recs.forecast_improvement}
                </Alert>
              )}
            </Box>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}

export default Recommendations; 