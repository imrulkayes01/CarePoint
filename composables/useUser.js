import { ref, computed, readonly } from "vue";

const user = ref(null);
const isLoggedIn = computed(() => !!user.value);

export default function useUser() {
  // Initialize user from localStorage on app start
  const initializeUser = () => {
    if (process.client) {
      const savedUser = localStorage.getItem("userData");
      if (savedUser) {
        user.value = JSON.parse(savedUser);
      }
    }
  };

  // Set user data
  const setUser = (userData) => {
    user.value = userData;
    if (process.client) {
      localStorage.setItem("userData", JSON.stringify(userData));
    }
  };

  // Clear user data
  const clearUser = () => {
    user.value = null;
    if (process.client) {
      localStorage.removeItem("userData");
      localStorage.removeItem("firebase_token");
    }
  };

  // Get user data
  const getUser = computed(() => user.value);

  return {
    user: readonly(user),
    isLoggedIn,
    getUser,
    setUser,
    clearUser,
    initializeUser,
  };
}
