import { handleCommentSubmit } from "../services/handleComment";

export function AddComment({ article_id }: { article_id: number }) {
  return (
    <section className="flex flex-col items-center">
      <form
        className="flex flex-col items-center gap-2 w-full"
        onSubmit={(e) => handleCommentSubmit(e, article_id)}
      >
        <textarea
          name="comment"
          placeholder="Laisse ton commentaire"
          className="pt-2 pl-2 w-80 h-20 rounded-xl border-2 border-mainBorder shadow-mainBorder shadow-md"
        />
        <button
          type="submit"
          className="rounded border-2 font-semibold border-buttonBorder bg-secondTheme w-fit px-2 active:brightness-90 active:border-cyan-900"
        >
          Commenter
        </button>
      </form>
    </section>
  );
}
