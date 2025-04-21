// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.9.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.9.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAGHLS1hwXIu7v8EYGHqc320wdwmfZpkj0",
  authDomain: "pwa-g9-2025.firebaseapp.com",
  projectId: "pwa-g9-2025",
  storageBucket: "pwa-g9-2025.firebasestorage.app",
  messagingSenderId: "619074453275",
  appId: "1:619074453275:web:853ca8640be57379015dbe",
  measurementId: "G-ED9XNMQSBZ"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Mensaje en background:', payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/2025-1-s1-g9-t2/iconLogo.png', // o cualquier ícono que tengas
  });
});
