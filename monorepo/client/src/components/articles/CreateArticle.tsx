import { useState } from "react";
import { QuillEditor } from "../quill/QuillEditor";

const baseURL = import.meta.env.VITE_API_URL;

export function CreateArticle() {
  const [htmlContent, setHtmlContent] = useState("");

  const handleSubmitArticle = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const title = formData.get("title") as string;
    const preview_img = formData.get("preview_img") as string;

    const res = await fetch(`${baseURL}/api/create/article`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, preview_img, content: htmlContent }),
    });

    if (res.ok) {
      alert("Article créé avec succès !");
      form.reset();
      setHtmlContent("");
    } else {
      alert("Erreur lors de la création");
      console.log(res);
    }
  };

  return (
    <section className="main-border overflow-hidden flex flex-col items-center gap-5 col-span-3">
      <div className="sticky-blur h-15 flex items-center justify-center w-full">
        <h3 className="gradient-title text-[1.5rem] bg-clip-text bg-linear-to-r/hsl from-[rgba(0, 0, 0, 0.55)] to-amber-500">
          Crée ton article
        </h3>
        <div className="gradient-border bg-gradient-to-r from-transparent via-main-border to-transparent" />
      </div>

      <form
        onSubmit={handleSubmitArticle}
        className="w-full max-w-4xl flex flex-col items-center gap-5 py-3"
      >
        <input
          aria-label="Preview image"
          name="preview_img"
          placeholder="Lien de ton image d'entête"
          required
          className="border-2 pl-1 border-main-border bg-amber-50 rounded w-[55%] sm:w-[35%]"
          type="text"
        />
        <input
          aria-label="Article title"
          type="text"
          name="title"
          placeholder="Titre de l'article"
          required
          className="border-2 pl-1 border-main-border bg-amber-50 rounded w-[55%] sm:w-[35%]"
        />

        <QuillEditor value={htmlContent} onChange={setHtmlContent} />
        <button
          type="submit"
          className="btn active:brightness-90 active:border-cyan-900"
        >
          Créer
        </button>
      </form>
    </section>
  );
}
