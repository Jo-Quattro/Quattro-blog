import { CommentCard } from "./CommentCard";
import { useGET } from "../../hooks/fetch/GET/useGET";
import { AddComment } from "./AddComment";
import { useState } from "react";

interface Comments {
  user_name: string;
  id: number;
  text: string;
  creation_date: Date;
}
interface ArticleProp {
  article_id: number;
}
export function CommentSection({ article_id }: ArticleProp) {
  const [isSent, setIsSent] = useState<Boolean | null>(null);
  const { data: comments } = useGET<Comments[]>(`/api/comments/${article_id}`, [
    isSent,
  ]);

  return (
    <section className="w-[95%] md:w-[70%] flex flex-col gap-5">
      <h2 className="m-auto w-fit text-[2rem] my-5 font-bold bg-linear-to-r/hsl from-[rgba(0, 0, 0, 0.10)] to-amber-800 bg-clip-text text-transparent">
        Commentaires :
      </h2>
      {comments?.length === 0 ? (
        <p className="p-4 text-gray-500">Aucun commentaire pour l’instant.</p>
      ) : (
        <div className="flex flex-col main-border p-5 h-150 overflow-y-scroll">
          {comments?.map((comment, idx) => (
            <div
              key={comment.id}
              className={`flex w-full p-3 ${
                idx % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <CommentCard {...comment} />
            </div>
          ))}
        </div>
      )}
      <AddComment article_id={article_id} setIsSent={setIsSent} />
    </section>
  );
}
