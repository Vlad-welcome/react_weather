import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";

export const Weather = () => {
  const API_KEY = import.meta.env.VITE_API_URL || process.env.VITE_API_URL;

  const [coords, setCoords] = useState(null);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Геолокация не поддерживается");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ latitude, longitude });
      },
      (err) => setError(err.message),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 },
    );
  }, []);

  useEffect(() => {
    if (!coords) return;

    const { latitude, longitude } = coords;
    const url =
      `https://api.openweathermap.org/data/2.5/weather` +
      `?lat=${latitude}&lon=${longitude}` +
      `&appid=${API_KEY}&units=metric&lang=ru`;

    const controller = new AbortController();

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(setWeather)
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
      });

    return () => controller.abort();
  }, [coords]);

  const icons = {
    // ясно
    "01d": "☀️",
    "01n": "🌙",
    // малооблачно
    "02d": "⛅",
    "02n": "🌙",
    // рассеянные облака
    "03d": "🌥️",
    "03n": "🌥️",
    // облачно / пасмурно
    "04d": "☁️",
    "04n": "☁️",
    // ливень / небольшой дождь
    "09d": "🌦️",
    "09n": "🌦️",
    // дождь
    "10d": "🌧️",
    "10n": "🌧️",
    // гроза
    "11d": "⛈️",
    "11n": "⛈️",
    // снег
    "13d": "❄️",
    "13n": "❄️",
    // туман / мгла
    "50d": "🌫️",
    "50n": "🌫️",
  };

  if (error) return <p>Ошибка: {error}</p>;
  if (!weather) return <p>Загрузка…</p>;

  return (
    <div className="container mt-3">
      <h1 className="text-center">{weather.name}!</h1>
      <div>
        <div className="d-flex justify-content-center align-items-center">
          <span style={{ fontSize: "10rem" }}>{icons[weather.weather[0].icon] || "?"}</span>
        </div>
        <p className="fs-4">
          <b>Температура:</b> {weather.main.temp}°C
        </p>
        <p className="fs-4">
          <b>Погода:</b> {weather.weather[0].description}
        </p>
        <p className="fs-4">
          <b>Ветер:</b> {weather.wind.speed}м/с
        </p>
      </div>
    </div>
  );
};
