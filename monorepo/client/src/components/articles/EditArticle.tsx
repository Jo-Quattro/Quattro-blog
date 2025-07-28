import { useEffect, useRef, useState } from "react";
import { QuillEditor } from "../quill/QuillEditor";

interface EditArticleProps {
  articleID: number | null;
}

export function EditArticle({ articleID }: EditArticleProps) {
  const baseURL = import.meta.env.VITE_API_URL;

  const formRef = useRef<HTMLFormElement>(null);

  const [htmlContent, setHtmlContent] = useState("");
  const [defaultValues, setDefaultValues] = useState({
    title: "",
    preview_img: "",
  });

  useEffect(() => {
    if (!articleID) return;

    const fetchArticle = async () => {
      try {
        const res = await fetch(`${baseURL}/api/article/${articleID}`, {
          credentials: "include",
        });

        if (!res.ok) throw new Error("Erreur lors du fetch de l'article");

        const article = await res.json();
        setHtmlContent(article.content || "");
        setDefaultValues({
          title: article.title || "",
          preview_img: article.preview_img || "",
        });
      } catch (error) {
        console.error("Erreur lors de la récupération de l'article :", error);
      }
    };

    fetchArticle();
  }, [articleID]);

  const handleSubmitArticle = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    formData.append("id", String(articleID));
    formData.append("content", htmlContent);

    const res = await fetch(`${baseURL}/api/article/${articleID}`, {
      method: "PUT",
      credentials: "include",
      body: formData,
    });

    if (res.ok) {
      alert("Article modifié avec succès !");
    } else {
      alert("Erreur lors de la modification");
      console.log(res);
    }
  };

  return (
    <section className="main-border flex flex-col items-center gap-5 col-span-5 overflow-hidden py-3">
      <div className="sticky-blur h-15 flex items-center justify-center w-full">
        <h3 className="gradient-title text-[1.5rem] bg-clip-text bg-linear-to-r/hsl from-[rgba(0, 0, 0, 0.55)] to-amber-500">
          Modifie ton article
        </h3>
        <div className="gradient-border bg-gradient-to-r from-transparent via-main-border to-transparent" />
      </div>
      <form
        ref={formRef}
        onSubmit={handleSubmitArticle}
        className="w-full max-w-4xl flex flex-col items-center gap-5"
      >
        <input
          name="preview_img"
          defaultValue={defaultValues.preview_img}
          placeholder="Lien de ton image d'entête"
          className="border-2 pl-1 border-main-border bg-amber-50 rounded w-[55%] sm:w-[35%]"
          type="text"
        />
        <input
          type="text"
          name="title"
          defaultValue={defaultValues.title}
          placeholder="Titre de l'article"
          className="border-2 pl-1 border-main-border bg-amber-50 rounded w-[55%] sm:w-[35%]"
        />

        <QuillEditor value={htmlContent} onChange={setHtmlContent} />
        <button
          type="submit"
          className="btn active:brightness-90 active:border-cyan-900 "
        >
          Modifier
        </button>
      </form>
    </section>
  );
}
