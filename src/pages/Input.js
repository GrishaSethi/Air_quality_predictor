import React, { useState } from 'react';
import { Container, Card, CardContent, Typography, TextField, Button, Grid, Alert, MenuItem } from '@mui/material';
import { setLocation } from '../api/api';

const HARDCODED_API_KEY = 'fdadc21074f71eb5bc693e4005619233';

function Input() {
  const [locationType, setLocationType] = useState('city');
  const [city, setCity] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);
    try {
      if (locationType === 'city') {
        await setLocation({ city, api_key: HARDCODED_API_KEY });
      } else {
        await setLocation({ lat: parseFloat(lat), lon: parseFloat(lon), api_key: HARDCODED_API_KEY });
      }
      setMessage('Location set successfully!');
    } catch (err) {
      setError('Failed to set location.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Setup Location
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              select
              label="Location Type"
              value={locationType}
              onChange={e => setLocationType(e.target.value)}
              fullWidth
              margin="normal"
            >
              <MenuItem value="city">City</MenuItem>
              <MenuItem value="coordinates">Coordinates</MenuItem>
            </TextField>
            {locationType === 'city' ? (
              <TextField
                label="City"
                value={city}
                onChange={e => setCity(e.target.value)}
                fullWidth
                required
                margin="normal"
              />
            ) : (
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="Latitude"
                    value={lat}
                    onChange={e => setLat(e.target.value)}
                    fullWidth
                    required
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Longitude"
                    value={lon}
                    onChange={e => setLon(e.target.value)}
                    fullWidth
                    required
                    margin="normal"
                  />
                </Grid>
              </Grid>
            )}
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }} fullWidth>
              Save Settings
            </Button>
          </form>
          {message && <Alert severity="success" sx={{ mt: 2 }}>{message}</Alert>}
          {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
        </CardContent>
      </Card>
    </Container>
  );
}

export default Input; 