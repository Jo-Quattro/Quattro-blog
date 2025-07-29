import { useGET } from "../../hooks/fetch/GET/useGET";
import { ArticleForm } from "../articles/ArticleForm";
import { PreviewArticle } from "./PreviewArticle";
import { UserInfos } from "./UserInfos";
import { useState } from "react";

interface UserInfos {
  name: string;
  email: string;
}

export function UserDashboard() {
  const { data: userInfos } = useGET<UserInfos>("/api/user", []);
  const [articleToModify, setArticleToModify] = useState<number | null>(null);
  return (
    <section className="flex flex-col py-10">
      <h2 className="w-fit m-auto  text-[2rem] gradient-title bg-clip-text bg-linear-to-r/hsl from-[rgba(0, 0, 0, 0.15)] to-amber-500">
        Salut {userInfos?.name}
      </h2>
      <section className="flex flex-col overflow-y-scroll flex-1 lg:grid lg:grid-cols-3  gap-2 m-1.5 py-3">
        <div className="flex h-315 flex-col col-span-2 gap-2">
          <UserInfos
            name={userInfos?.name ?? ""}
            email={userInfos?.email ?? ""}
          />
          <ArticleForm
            articleID={articleToModify}
            setArticleToModify={setArticleToModify}
          />
        </div>
        <PreviewArticle setArticleToModify={setArticleToModify} />
      </section>
    </section>
  );
}
