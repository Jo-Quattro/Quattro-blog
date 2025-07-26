import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { ConnexionRegister } from "./ConnexionRegister";
import { PreviewArticle } from "../components/user/PreviewArticle";
import { UserInfos } from "../components/user/UserInfos";
import { CreateArticle } from "./CreateArticle";

export function UserPage() {
  const baseURL = import.meta.env.VITE_API_URL;
  const [userInfos, setUserInfos] = useState<{
    name?: string;
    email?: string;
  } | null>(null);
  const isAuth = useAuth();
  useEffect(() => {
    fetch(`${baseURL}/api/user`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setUserInfos(data))
      .catch((err) => console.error("Erreur de récupération :", err));
  }, []);
  return isAuth && userInfos ? (
    // TODO COMPONENT USER INFOS
    //TODO DISPLAY USER ARTICLES AND BUTTON TO DELETE THEM !
    <>
      <div className="flex flex-col md:px-3 py-10">
        <h2 className="w-fit m-auto gradient-title text-[2rem] bg-clip-text bg-linear-to-r/hsl from-[rgba(0, 0, 0, 0.15)] to-amber-500">
          Salut {userInfos.name}
        </h2>
        <section className="flex flex-col flex-1 min-h-0 md:grid md:grid-cols-5  gap-2 m-1.5 py-5">
          <div className="flex flex-col col-span-3 gap-2">
            <UserInfos
              name={userInfos.name ?? ""}
              email={userInfos.email ?? ""}
            />
            <CreateArticle />
          </div>
          <PreviewArticle />
        </section>
      </div>
    </>
  ) : (
    <ConnexionRegister />
  );
}
