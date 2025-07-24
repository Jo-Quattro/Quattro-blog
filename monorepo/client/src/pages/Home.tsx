import { useEffect, useState } from "react";

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
    <>
      <h2 className="pt-10 text-center">Coucou la home</h2>
      {articles.map((article) => (
        <h3 key={article.id} title={article.title}>
          {article.title}
        </h3>
      ))}
    </>
  );
}
