import axios from 'axios';
import { API_BASE_URL } from '../config';

export const setApiKey = (apiKey) =>
  axios.post(`${API_BASE_URL}/api/set-api-key`, { api_key: apiKey });

export const setLocation = (location) =>
  axios.post(`${API_BASE_URL}/api/set-location`, location);

export const fetchData = () =>
  axios.get(`${API_BASE_URL}/api/fetch-data`);

export const getCurrentAQI = () =>
  axios.get(`${API_BASE_URL}/api/current-aqi`);

export const getHistory = () =>
  axios.get(`${API_BASE_URL}/api/history`);

export const trainModel = (modelType, lookback) =>
  axios.post(`${API_BASE_URL}/api/train-model`, { model_type: modelType, lookback });

export const getForecast = (days = 3) =>
  axios.get(`${API_BASE_URL}/api/forecast`, { params: { days } });

export const getAnomalies = (window = 24, threshold = 2.0) =>
  axios.get(`${API_BASE_URL}/api/anomalies`, { params: { window, threshold } });

export const getRecommendations = () =>
  axios.get(`${API_BASE_URL}/api/recommendations`); 