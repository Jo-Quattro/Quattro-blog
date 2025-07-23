import { handleLogout } from "../services/handleLogout";

export function LogoutButton() {
  return <button onClick={handleLogout}>Déconnexion</button>;
}
