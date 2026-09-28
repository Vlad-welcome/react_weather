import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: false, // Включает Service Worker в режиме разработки
        type: "module",
      },
      // 'autoUpdate' автоматически обновляет SW при выходе новой версии
      registerType: "autoUpdate",
      // Настройки для генерации Web App Manifest
      manifest: {
        name: "Weather PWA",
        short_name: "Weather",
        description: "Погода с офлайн-доступом",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      // Настройки Workbox для кеширования
      workbox: {
        //отдавать index.html на любые навигационные запросы
        navigateFallback: "/index.html",

        //НЕ подменять на index.html
        navigateFallbackDenylist: [
          /^\/api\//, // ваш бэкенд-API
          /^\/__/, // служебные запросы Vite
          /\/[^/?]+\.[^/]+$/, // любые файлы с расширением: .js, .css, .png и т.д.
        ],

        // Какие статические файлы кешировать "на старте"
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2}"],
        // Правила для кеширования запросов, которые происходят во время работы приложения
        runtimeCaching: [
          {
            // Регулярное выражение для URL вашего API погоды
            urlPattern: /^https:\/\/api\.openweathermap\.org\/.*/i,
            // Стратегия кеширования: "Сеть в приоритете"
            handler: "NetworkFirst",
            options: {
              cacheName: "weather-api-cache",
              // Настройки для управления кешем
              expiration: {
                maxEntries: 50, // Хранить не более 50 последних запросов
                maxAgeSeconds: 60 * 60 * 24, // Хранить в течение 24 часов
              },
              cacheableResponse: {
                // Кешировать только успешные ответы (статус 200)
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
  server: {
    port: 4000, // ← вот здесь
    strictPort: true, // падать, если порт занят, а не искать другой
  },
  customLogger: {
    info(msg) {
      console.log("[info]", msg);
    },
    warn(msg) {
      console.warn("[warn]", msg);
    },
    warnOnce(msg) {
      console.warn("[warn]", msg);
    },
    error(msg) {
      console.error("[error]", msg);
    },
    clearScreen() {},
    hasErrorLogged() {
      return false;
    },
    hasWarned: false,
  },
  base: process.env.VITE_BASE_PATH || "/react_weather",
});
