import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CommentSection } from "../components/CommentSection";
import { AddComment } from "../components/AddComment";

type Article = {
  id: number;
  title: string;
  content: string;
  preview_img: string;
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

  if (!article) return <div>Article indisponible</div>;

  return (
    <>
      <article className="flex flex-col items-center gap-5 py-10 prose mx-auto ">
        <h2 className="text-[2.5rem] font-bold px-3 bg-linear-to-r/hsl from-[rgba(0, 0, 0, 0.10)] to-amber-800 bg-clip-text text-transparent ">
          {article.title}
        </h2>
        <img
          src={article.preview_img}
          alt={article.title}
          className="h-30 w-[95%] object-cover border rounded-2xl border-mainBorder shadow shadow-mainBorder hover:h-170  transition-[height] duration-500 ease-in-out"
        />
        <div
          dangerouslySetInnerHTML={{ __html: article.content }}
          className="border-3 text-center rounded-2xl border-mainBorder shadow-mainBorder shadow-md mx-2 p-5 text-xl
          [&_img]:border-1 [&_img]:border-buttonBorder [&_img]:rounded-lg [&_img]:max-w-[80%] [&_img]:h-auto [&_img]:mx-auto"
        />
        <CommentSection />
        <AddComment article_id={article.id} />
      </article>
    </>
  );
}
