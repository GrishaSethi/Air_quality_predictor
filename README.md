# 🌍 **Air Quality Predictor** — Stay Ahead of the Air You Breathe!

Welcome to **Air Quality Predictor** — your one-stop solution to track, predict, and analyze air quality with ease. Whether you're planning a run, managing your health, or just curious, we’ve got you covered with real-time AQI, trends, forecasts, and smart recommendations.

---

## 🚀 Features
🔍 **Search by City or Coordinates** — Just input a location and let the magic happen  
📊 **Live AQI Monitoring** — Get the current Air Quality Index at a glance  
📈 **History & Trends** — Visualize past AQI data with stunning charts  
🌤️ **Forecast** — Stay informed with predictions of upcoming air quality  
⚠️ **Anomaly Detection** — Spot unusual air quality spikes  
❤️ **Health Recommendations** — Tailored tips based on AQI levels  

---

## 🛠 Tech Stack
- ⚛️ React + React Router
- 🎨 Material-UI
- 📉 Chart.js
- 🌐 Axios
- 🔗 Connected to a Flask backend API

---

## 🧑‍💻 Getting Started

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

Then visit 👉 http://localhost:3000

### 4. Build for production
```bash
npm run build
```

### 5. Deploy 🚀
You can deploy the `build/` folder to Vercel, Netlify, or any static host.

---

## 🔁 Backend Connection
Make sure your Flask backend is running and accessible from the frontend. Update `API_BASE_URL` in `src/config.js` if needed.

---

## 📁Project Structure
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

## 💡 How It Works

1. 🌐 **Enter a city or coordinates**  
2. 💾 **The app saves your location**  
3. 📲 **Fetches current AQI from the backend**  
4. 🕒 **Displays historical trends & charts**  
5. 🔮 **Shows forecasted AQI levels**  
6. 📉 **Detects anomalies in the data**  
7. ❤️ **Offers personalized health advice based on air quality**
