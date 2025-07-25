import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { LogoutButton } from "./LogoutButton";

export function Header() {
  const isAuth = useAuth();

  return (
    <header className="flex h-20 bg-[rgba(255,255,255,0.2)] justify-between px-3 items-center font-bold sticky top-0 z-19 backdrop-blur-md">
      <h1 className="bg-linear-to-r/hsl from-[rgba(0, 0, 0, 0.55)] to-amber-500 bg-clip-text text-transparent text-4xl">
        <Link to="/">Quattro-Blog</Link>
      </h1>

      <nav className="flex flex-col sm:flex-row gap-2">
        <Link
          to="/create/article"
          className="rounded border-2 border-buttonBorder bg-secondTheme  px-2 active:brightness-90 active:border-cyan-900"
        >
          Crée ton article
        </Link>

        {isAuth ? (
          <LogoutButton />
        ) : (
          <Link
            to="/connexionInscription"
            className="text-center rounded border-2 border-buttonBorder bg-secondTheme  px-2 active:brightness-90 active:border-cyan-900"
          >
            Connexion
          </Link>
        )}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-700 to-transparent" />
    </header>
  );
}
