import { handleLogout } from "../services/handleLogout";

export function LogoutButton() {
  return (
    <button
      onClick={handleLogout}
      className="rounded border-2 border-buttonBorder bg-secondTheme w-fit px-2 active:brightness-90 active:border-cyan-900"
    >
      Déconnexion
    </button>
  );
}
