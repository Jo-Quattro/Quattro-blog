import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { CommentCard } from "./CommentCard";

interface Comments {
  user_name: string;
  id: number;
  text: string;
  creation_date: Date;
}
export function CommentSection() {
  const [comments, setComments] = useState<Comments[]>([]);
  const baseURL = import.meta.env.VITE_API_URL;

  const params = useParams();
  const articleID = params.id;
  console.info(articleID);

  useEffect(() => {
    fetch(`${baseURL}/api/comments/${articleID}`)
      .then((response) => response.json())
      .then((data) =>
        setComments(
          data.map((comment: Comments) => ({
            ...comment,
            creation_date: new Date(comment.creation_date),
          }))
        )
      );
  }, [articleID]);

  return (
    <section className="w-[95%] md:w-[70%]">
      <h2 className="text-center my-5 font-bold">Commentaires :</h2>
      {comments.length === 0 ? (
        <p className="p-4 text-gray-500">Aucun commentaire pour l’instant.</p>
      ) : (
        <div className="flex flex-col rounded-xl border-2 border-mainBorder shadow-mainBorder shadow-md">
          {comments.map((comment, idx) => (
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
    </section>
  );
}
