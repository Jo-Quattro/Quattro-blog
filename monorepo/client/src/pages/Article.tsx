import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CommentSection } from "../components/CommentSection";
import { AddComment } from "../components/AddComment";

type Article = {
  id: number;
  title: string;
  content: string;
};

export function Article() {
  const [article, setArticle] = useState<Article | null>(null);
  const params = useParams();
  const articleID = params.id;
  useEffect(() => {
    async function fetchArticle() {
      const res = await fetch(
        `http://localhost:3310/api/article/${articleID}`,
        {
          credentials: "include",
        }
      );
      if (res.ok) {
        const data = await res.json();
        setArticle(data);
      } else {
        console.error("Erreur lors du chargement");
      }
    }
    fetchArticle();
  }, []);

  if (!article) return <div>Chargement...</div>;

  return (
    <>
      <article className="flex flex-col items-center gap-5 py-10 prose w-[90%] mx-auto ">
        <h1>{article.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
        <CommentSection />
        <AddComment article_id={article.id} />
      </article>
    </>
  );
}
