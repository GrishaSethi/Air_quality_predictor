import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const pages = [
  { label: 'Home', path: '/' },
  { label: 'Input', path: '/input' },
  { label: 'Current AQI', path: '/current' },
  { label: 'History', path: '/history' },
  { label: 'Forecast', path: '/forecast' },
  { label: 'Anomalies', path: '/anomalies' },
  { label: 'Recommendations', path: '/recommendations' },
];

function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Air Quality Predictor
        </Typography>
        <Box>
          {pages.map((page) => (
            <Button
              key={page.path}
              color="inherit"
              component={RouterLink}
              to={page.path}
              sx={{ ml: 1 }}
            >
              {page.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 