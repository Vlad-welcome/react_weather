import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";

import store from "./redux/store";

import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  onNeedRefresh() {
    // Эта функция вызовется, когда в фоне будет скачано обновление приложения.
    if (confirm("Доступна новая версия приложения. Обновить?")) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log("Приложение готово к работе в офлайн-режиме!");
  },
});

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </>,
);
