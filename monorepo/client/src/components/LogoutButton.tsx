import { handleLogout } from "../services/handleLogout";

export function LogoutButton() {
  return (
    <button
      onClick={handleLogout}
      className="rounded w-32 border-2 border-green-600 bg-secondTheme px-2 active:brightness-90 active:border-cyan-900"
    >
      Déconnexion
    </button>
  );
}
