// Service Worker - 這是 PWA 必需的檔案
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // 這裡可以做離線緩存，目前我們先保持簡單，直接回傳網絡請求
  e.respondWith(fetch(e.request));
});