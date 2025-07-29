import { useAuth } from "../hooks/useAuth";

import { UserDashboard } from "../components/user/UserDashboard";
import { ConnexionRegister } from "../components/auth/ConnexionRegister";

export function UserPage() {
  const isAuth = useAuth();
  return isAuth ? <UserDashboard /> : <ConnexionRegister />;
}
