import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { LogoutButton } from "../components/user/LogoutButton";

export function Header() {
  const isAuth = useAuth();

  return (
    <header className="flex h-30 justify-between bg-transparent px-2 items-center font-bold sticky top-0 z-19 backdrop-blur-md">
      <h1 className="gradient-title text-[2.5rem] bg-clip-text bg-linear-to-r/hsl from-[rgba(0, 0, 0, 0.55)] to-amber-500">
        <Link to="/">Quattro-Blog</Link>
      </h1>

      <nav className="flex flex-col items-center gap-1.5">
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
        <Link to="/create/article" className="btn">
          Crée un article
        </Link>
      </nav>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-700 to-transparent" />
    </header>
  );
}
