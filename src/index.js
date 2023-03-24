import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// import Weather from './services/Weather';

// const weather = new Weather();

// weather.getCurrentWeather().then(res => console.log(res))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
