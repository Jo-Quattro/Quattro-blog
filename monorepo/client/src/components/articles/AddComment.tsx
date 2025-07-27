import { handleCommentSubmit } from "../../services/handleComment";

export function AddComment({ article_id }: { article_id: number }) {
  return (
    <section className="flex flex-col items-center">
      <form
        className="flex flex-col items-center gap-2 w-full"
        onSubmit={(e) => handleCommentSubmit(e, article_id)}
      >
        <textarea
          aria-label="Comment area"
          name="comment"
          placeholder="Laisse ton commentaire"
          className="pt-2 pl-2 w-75 h-20 max-h-50 md:w-100 main-border"
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
