import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAGHLS1hwXIu7v8EYGHqc320wdwmfZpkj0",
  authDomain: "pwa-g9-2025.firebaseapp.com",
  projectId: "pwa-g9-2025",
  storageBucket: "pwa-g9-2025.firebasestorage.app",
  messagingSenderId: "619074453275",
  appId: "1:619074453275:web:853ca8640be57379015dbe",
  measurementId: "G-ED9XNMQSBZ"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export async function requestPermission() {
  try {
    const token = await getToken(messaging, {
      vapidKey: "BK5dG7X9LrsGL2toqXYmZ2gaGc_V78EnHog8ZiggCB3gzL2iIguzVouD1coi_24mJQT1HHfIcXCWsZ3iEqIf6JY", // lo sacas de Cloud Messaging en Firebase console
    });
    console.log("Token de cliente:", token);
  } catch (err) {
    console.error("No se pudo obtener token:", err);
  }
}

export function setupOnMessageHandler() {
  onMessage(messaging, (payload) => {
    console.log("Notificación en primer plano:", payload);

    if (Notification.permission === "granted") {
      new Notification(payload.notification.title, {
        body: payload.notification.body,
        icon: "/iconLogo.png",
      });
    }
  });
}
