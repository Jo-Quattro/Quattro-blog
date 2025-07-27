import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { LogoutButton } from "../components/user/LogoutButton";

export function Header() {
  const isAuth = useAuth();

  return (
    <header className="sticky-blur flex h-20 justify-between px-2 items-center font-bold z-20">
      <h1 className="gradient-title text-[2.5rem] bg-clip-text bg-linear-to-r/hsl from-color-mainTheme to-amber-500">
        <Link to="/">Quattro-Blog</Link>
      </h1>

      <nav className="flex flex-col items-center gap-3">
        {isAuth ? (
          <LogoutButton />
        ) : (
          <Link to="/espace-utilisateur" className="btn">
            Connexion
          </Link>
        )}
        {isAuth ? (
          <Link to="/espace-utilisateur" className=" btn">
            Mon espace
          </Link>
        ) : (
          ""
        )}
      </nav>

      <div className="gradient-border bg-gradient-to-r from-transparent via-main-border to-transparent" />
    </header>
  );
}
