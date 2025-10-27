import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

import {
  getAnalytics,
  logEvent,
  setUserId,
  isSupported,
} from "firebase/analytics";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGVxYDOQWkqnDx41R7ErNiSy6TIXwzeTQ",
  authDomain: "capepoint-601f6.firebaseapp.com",
  projectId: "capepoint-601f6",
  storageBucket: "capepoint-601f6.firebasestorage.app",
  messagingSenderId: "924260360870",
  appId: "1:924260360870:web:b05246f947f573ccd48a67",
  measurementId: "G-QCSZQV9Q8W",
};

export default function () {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const storage = getStorage(app);
  const db = getFirestore(app);

  let analytics;
  let tokenRefreshInterval;

  // Check if Firebase Analytics is supported
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    } else {
      console.log("Firebase Analytics is not supported in this environment");
    }
  });

  const provider = () => new GoogleAuthProvider(app);

  auth.onAuthStateChanged(async (user) => {
    if (user) {
      // Set the ID token in Axios headers immediately
      await refreshAndSetIdToken();

      // Set up or refresh the token refresh interval
      clearInterval(tokenRefreshInterval);
      tokenRefreshInterval = setInterval(() => {
        refreshAndSetIdToken();
      }, 55 * 60 * 1000);
    }
  });

  async function refreshAndSetIdToken() {
    try {
      const idToken = await auth.currentUser.getIdToken(true); // Force token refresh
      $axios.defaults.headers.common["Authorization"] = `Bearer ${idToken}`;
    } catch (error) {
      console.error("Error refreshing ID token:", error);
    }
  }

  onMounted(() => {
    const route = useRoute();

    watch(
      route,
      (to) => {
        if (analytics) {
          logEvent(analytics, "page_view", { page_path: to.path });
        }
      },
      { immediate: true }
    );
  });

  // Function to log events
  function eventLog(event_name, payload) {
    logEvent(analytics, event_name, payload);
  }

  return { auth, provider, storage, eventLog, db };
}
