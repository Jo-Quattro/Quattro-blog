import { useEffect, useState } from "react";
import { ArticleCard } from "../articles/ArticleCard";
import { Link } from "react-router";
import { handleDeleteArticle } from "../../services/handleDeleteArticle";

interface ArticleProp {
  id: number;
  title: string;
  preview_img: string;
  username: string;
}
export function PreviewArticle() {
  const baseURL = import.meta.env.VITE_API_URL;
  const [articles, setArticles] = useState<ArticleProp[]>([]);

  useEffect(() => {
    fetch(`${baseURL}/api/user-articles`, { credentials: "include" })
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);
  console.info(articles);
  return (
    <section className="main-border md:h-[55.7rem] px-3 py-5 col-span-2 overflow-y-auto">
      <h3 className="gradient-title mb-3 text-[1.5rem] text-center">
        Tes articles
      </h3>
      {
        <div className="flex flex-col gap-8 items-center">
          {articles.map((article) => (
            <div key={article.id} className="flex flex-col items-center gap-4 ">
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
              <button
                type="button"
                onClick={() => handleDeleteArticle(article.id)}
                className="btn border-red-500"
              >
                Supprimer
              </button>
            </div>
          ))}
        </div>
      }
    </section>
  );
}
