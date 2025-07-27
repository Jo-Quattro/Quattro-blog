import { handleLogout } from "../../services/handleLogout";

export function LogoutButton() {
  return (
    <button
      onClick={handleLogout}
      className="btn border-green-700 px-2 active:brightness-90 active:border-cyan-900"
    >
      Déconnexion
    </button>
  );
}
