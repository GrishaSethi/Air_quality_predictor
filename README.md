# Air Quality Predictor Frontend

This is a multi-page React app for air quality prediction, history, forecast, anomaly detection, and health recommendations. It connects to your Flask backend API.

## Features
- Input city or coordinates and API key
- View current AQI and details
- View AQI history with charts
- View AQI forecast
- Detect anomalies
- Get health recommendations

## Tech Stack
- React + React Router
- Material-UI
- Chart.js
- Axios

## Getting Started

### 1. Install dependencies
```bash
cd air-quality-frontend
npm install
```

### 2. Set the backend API URL
Edit `src/config.js` if your Flask backend is not running at `http://127.0.0.1:5000`.

```
export const API_BASE_URL = 'http://127.0.0.1:5000';
```

### 3. Start the development server
```bash
npm start
```

The app will run at [http://localhost:3000](http://localhost:3000).

### 4. Build for production
```bash
npm run build
```

### 5. Deploy
You can deploy the `build/` folder to Vercel, Netlify, or any static host.

---

## Connect to Flask Backend
Make sure your Flask backend is running and accessible from the frontend. Update `API_BASE_URL` in `src/config.js` if needed.

---

## Project Structure
```
air-quality-frontend/
├── public/
├── src/
│   ├── api/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   ├── index.js
│   └── config.js
├── package.json
└── README.md
```

---

## License
MIT 