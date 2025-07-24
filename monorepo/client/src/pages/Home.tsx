import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArticleCard } from "../components/ArticleCard";

interface Articles {
  id: number;
  title: string;
  content: string;
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
      <h2 className=" text-center">Partagez vos meilleurs souvenirs</h2>
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {articles.map((article) => (
          <Link to={`/article/${article.id}`}>
            <ArticleCard title={article.title} />
          </Link>
        ))}
      </div>
    </section>
  );
}
