import { useEffect, useState } from "react";
import { ArticleCard } from "../articles/ArticleCard";
import { Link } from "react-router";
import { handleDeleteArticle } from "../../services/handleDeleteArticle";
import { useGET } from "../../hooks/fetch/GET/useGET";

interface ArticleProp {
  id: number;
  title: string;
  preview_img: string;
  username: string;
}
//SPECIFIC TYPING TO BE ABLE TO UPDATE THE STATE
import { Dispatch, SetStateAction } from "react";
interface PreviewArticleProps {
  setArticleToModify: Dispatch<SetStateAction<number | null>>;
}
export function PreviewArticle({ setArticleToModify }: PreviewArticleProps) {
  const [isDeleted, setIsDeleted] = useState<boolean | null>(false);
  const { data: articles } = useGET<ArticleProp[]>("/api/user-articles", [
    isDeleted,
  ]);

  useEffect(() => {
    if (isDeleted === true) {
      setIsDeleted(false);
    }
  }, [isDeleted]);
  console.info("lenght :", articles?.length);
  return (
    <section className="main-border h-315 col-span-1 overflow-y-auto">
      <div className="sticky-blur h-15 flex items-center justify-center">
        <h3 className="gradient-title text-[1.5rem] bg-clip-text bg-linear-to-r/hsl from-[rgba(0, 0, 0, 0.55)] to-amber-500">
          Tes articles
        </h3>
        <div className="gradient-border bg-gradient-to-r from-transparent via-main-border to-transparent" />
      </div>
      {
        <div className="flex flex-wrap lg:flex-col lg:gap-5 py-3 items-center justify-center">
          {articles?.map((article) => (
            <div
              key={article.id}
              className="flex flex-col items-center lg:gap-4 "
            >
              <Link
                to={`/article/${article.id}`}
                className="transform scale-83 lg:scale-100"
              >
                <ArticleCard
                  preview_img={article.preview_img}
                  title={article.title}
                  username={article.username ?? ""}
                />
              </Link>
              <div className="flex gap-2">
                <button
                  className="btn"
                  onClick={() => setArticleToModify(article.id)}
                >
                  Modifier
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteArticle(article.id, setIsDeleted)}
                  className="btn border-red-500"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      }
    </section>
  );
}
