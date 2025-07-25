import { useState, useEffect } from "react";
import { isUserAuthenticated } from "../services/checkAuth";

export function useAuth() {
  const [isAuth, setIsAuth] = useState<null | boolean>(null);

  useEffect(() => {
    async function checkAuth() {
      const auth = await isUserAuthenticated();
      setIsAuth(auth);
    }

    checkAuth();
  }, []);
  console.info(isAuth);
  return isAuth;
}
