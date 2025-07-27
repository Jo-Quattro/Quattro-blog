import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { ConnexionRegister } from "./ConnexionRegister";
import { PreviewArticle } from "../components/user/PreviewArticle";
import { UserInfos } from "../components/user/UserInfos";
import { CreateArticle } from "../components/articles/CreateArticle";
import { EditArticle } from "../components/articles/EditArticle";

export function UserPage() {
  const baseURL = import.meta.env.VITE_API_URL;
  const [userInfos, setUserInfos] = useState<{
    name?: string;
    email?: string;
  } | null>(null);
  const [articleToModify, setArticleToModify] = useState<number | null>(null);
  const isAuth = useAuth();
  useEffect(() => {
    fetch(`${baseURL}/api/user`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setUserInfos(data))
      .catch((err) => console.error("Erreur de récupération :", err));
  }, []);
  console.info(articleToModify);
  return isAuth && userInfos ? (
    //TODO DISPLAY BUTTON TO MODIFY THE ARTICLES !
    <>
      <div className="flex flex-col py-10">
        <h2 className="w-fit m-auto  text-[2rem] gradient-title bg-clip-text bg-linear-to-r/hsl from-[rgba(0, 0, 0, 0.15)] to-amber-500">
          Salut {userInfos.name}
        </h2>
        <section className="flex flex-col overflow-y-scroll flex-1 lg:grid lg:grid-cols-3  gap-2 m-1.5 py-3">
          <div className="flex h-315 flex-col col-span-2 gap-2">
            <UserInfos
              name={userInfos.name ?? ""}
              email={userInfos.email ?? ""}
            />
            <EditArticle articleID={articleToModify} />
          </div>
          <PreviewArticle setArticleToModify={setArticleToModify} />
          <CreateArticle />
        </section>
      </div>
    </>
  ) : (
    <ConnexionRegister />
  );
}
