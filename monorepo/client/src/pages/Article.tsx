import { useParams } from "react-router";
import { CommentSection } from "../components/articles/CommentSection";
import { useGET } from "../hooks/fetch/GET/useGET";

interface Article {
  id: number;
  title: string;
  content: string;
  preview_img: string;
}

export function Article() {
  const params = useParams();
  const articleID = params.id;
  const { data: article } = useGET<Article>(`/api/article/${articleID}`, []);
  if (!article)
    return (
      <div className="flex font-semibold text-2xl justify-center items-center min-h-[100vh]">
        Article indisponible
      </div>
    );

  return (
    <>
      <article className="flex flex-col items-center gap-5 py-10 mx-auto ">
        <h2 className="text-[2.5rem] px-3 text-center font-bold  bg-linear-to-r/hsl from-[rgba(0, 0, 0, 0.10)] to-amber-800 bg-clip-text text-transparent">
          {article.title}
        </h2>
        <img
          src={article.preview_img}
          alt={article.title}
          className="h-30 w-[95%] object-cover border rounded-2xl border-main-border shadow shadow-main-border hover:h-170  transition-[height] duration-500 ease-in-out"
        />
        <div
          dangerouslySetInnerHTML={{ __html: article.content }}
          className="main-border w-[80%] text-center  mx-2 p-5 text-xl
          [&_img]:border-1 [&_img]:border-main-border [&_img]:rounded-lg [&_img]:h-auto [&_img]:max-h-[450px] [&_img]:mx-auto [&_img]:object-cover"
        />
        <CommentSection article_id={article.id} />
      </article>
    </>
  );
}
