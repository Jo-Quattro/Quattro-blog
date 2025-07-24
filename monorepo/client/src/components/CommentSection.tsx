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
    <section className="flex flex-col items-center">
      <h3 className="w-[90%] text-left">Commentaires :</h3>
      <div className="w-[90%] flex flex-col rounded-xl  border-3 border-mainBorder shadow-mainBorder shadow-md">
        {comments.map((comment, idx) => (
          <div
            key={comment.id}
            className={`flex w-full p-3  ${
              idx % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <CommentCard {...comment} />
          </div>
        ))}
      </div>
    </section>
  );
}
