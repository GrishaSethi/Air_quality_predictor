import React from 'react';
import { Container, Card, CardContent, Typography } from '@mui/material';

function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: 'url("/greenery-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="md">
        <Card style={{ background: 'rgba(255,255,255,0.85)', borderRadius: 20, boxShadow: '0 8px 32px 0 rgba(67,160,71,0.15)' }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Welcome to Air Quality Predictor
            </Typography>
            <Typography variant="body1">
              This app lets you check, predict, and analyze air quality for any location. Enter your city or coordinates, view current and historical AQI, get forecasts, detect anomalies, and receive health recommendations—all in one place.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default Home; 