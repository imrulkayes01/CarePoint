import { signInWithPopup } from "firebase/auth";

export default function useAuth() {
  const { auth, provider, eventLog } = useFirebase();
  const { setUser, clearUser } = useUser();

  async function signInWithGoogle() {
    try {
      const result = await signInWithPopup(auth, provider());
      const user = result.user;
      console.log(user, "user");

      // Save user data to state and localStorage
      const userData = {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        photoUrl: user.photoURL,
      };
      setUser(userData);

      eventLog("login", userData);
      return navigateTo("/");
    } catch (error) {
      console.error("Error signing in with Google:", error);
      throw error;
    }
  }

  function logout() {
    auth
      .signOut()
      .then(() => {
        // Clear user data from state and localStorage
        clearUser();
        // Navigate to signin page
        navigateTo("/signin");
      })
      .catch((e) => {
        console.error(e);
      });
  }

  return { signInWithGoogle, logout };
}
