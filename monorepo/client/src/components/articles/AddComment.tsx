import { useState } from "react";
import { handleCommentSubmit } from "../../services/handleCommentSubmit";
type AddCommentProps = {
  article_id: number;
  setIsSent: React.Dispatch<React.SetStateAction<Boolean | null>>;
};
export function AddComment({ article_id, setIsSent }: AddCommentProps) {
  const [textArea, setTextArea] = useState<string>("");

  return (
    <section className="flex flex-col items-center">
      <form
        className="flex flex-col items-center gap-2 w-full"
        onSubmit={(e) =>
          handleCommentSubmit(e, article_id, setIsSent, setTextArea)
        }
      >
        <textarea
          aria-label="Comment area"
          name="comment"
          placeholder="Laisse ton commentaire"
          className="pt-2 pl-2 w-75 h-20 max-h-50 md:w-100 main-border"
          value={textArea}
          onChange={(e) => setTextArea(e.target.value)}
        />
        <button
          type="submit"
          className="btn active:brightness-90 active:border-cyan-900"
        >
          Commenter
        </button>
      </form>
    </section>
  );
}
