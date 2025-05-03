import React from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Input from './pages/Input';
import Current from './pages/Current';
import History from './pages/History';
import Forecast from './pages/Forecast';
import Anomalies from './pages/Anomalies';
import Recommendations from './pages/Recommendations';

const theme = createTheme({
  palette: {
    primary: { main: '#43a047' }, // Green
    secondary: { main: '#81d4fa' }, // Light blue
    background: {
      default: '#e8f5e9', // Light green background
      paper: '#ffffff',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 4px 24px 0 rgba(67,160,71,0.10)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e8f5e9 0%, #b2dfdb 100%)',
        backgroundAttachment: 'fixed',
      }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/input" element={<Input />} />
          <Route path="/current" element={<Current />} />
          <Route path="/history" element={<History />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/anomalies" element={<Anomalies />} />
          <Route path="/recommendations" element={<Recommendations />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App; 