import { handleLogout } from "../services/handleLogout";

export function LogoutButton() {
  return (
    <button
      onClick={handleLogout}
      className="rounded border-2 border-amber-600 bg-amber-200 w-fit px-2 active:brightness-90 active:border-cyan-900"
    >
      Déconnexion
    </button>
  );
}
