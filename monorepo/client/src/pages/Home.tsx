import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArticleCard } from "../components/ArticleCard";

interface Articles {
  id: number;
  title: string;
  content: string;
  preview_img: string;
}
export function Home() {
  const baseURL = import.meta.env.VITE_API_URL;
  const [articles, setArticles] = useState<Articles[]>([]);
  useEffect(() => {
    fetch(`${baseURL}/api/articles`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);
  console.info(articles);
  return (
    <section className="py-10 flex flex-col gap-10">
      <h2 className=" text-center flex flex-col bg-linear-to-r/hsl from-[rgba(0, 0, 0, 0.5)] to-amber-700 bg-clip-text text-transparent">
        <span className="pr-20"> Des voyages, des recettes,</span>{" "}
        <span className="pl-20">des souvenirs à partager ?</span>
      </h2>
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {articles.map((article) => (
          <Link to={`/article/${article.id}`}>
            <ArticleCard
              title={article.title}
              preview_img={article.preview_img}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
