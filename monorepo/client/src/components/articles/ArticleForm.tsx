import { useEffect, useRef, useState } from "react";
import { QuillEditor } from "../quill/QuillEditor";
import { IoMdRefresh } from "react-icons/io";
import { handleSubmitArticle } from "../../services/handleSubmitArticle";

const baseURL = import.meta.env.VITE_API_URL;

interface ArticleFormProps {
  articleID: number | null;
  setArticleToModify: React.Dispatch<React.SetStateAction<number | null>>;
}

export function ArticleForm({
  articleID,
  setArticleToModify,
}: ArticleFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [htmlContent, setHtmlContent] = useState("");
  const [defaultValues, setDefaultValues] = useState({
    title: "",
    preview_img: "",
  });

  const isEditing = articleID !== null;

  useEffect(() => {
    if (!isEditing) return;

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

  const handleSwitchToCreate = () => {
    setArticleToModify(null);
    setHtmlContent("");
    setDefaultValues({ title: "", preview_img: "" });
    if (formRef.current) formRef.current.reset();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    if (isEditing) {
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
    } else {
      await handleSubmitArticle(htmlContent, setHtmlContent, event);
    }
  };

  return (
    <section className="main-border flex flex-col items-center gap-5 col-span-3 py-3">
      <div className="sticky-blur h-15 flex items-center justify-center w-full relative">
        <h3 className="gradient-title text-[1.5rem] bg-clip-text bg-linear-to-r/hsl from-[rgba(0,0,0,0.55)] to-amber-500">
          {isEditing ? "Modifie ton article" : "Crée ton article"}
        </h3>

        <div className="gradient-border bg-gradient-to-r from-transparent via-main-border to-transparent" />
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full max-w-4xl flex flex-col items-center gap-5"
      >
        <input
          name="preview_img"
          placeholder="Lien de ton image d'entête"
          defaultValue={defaultValues.preview_img}
          required={!isEditing}
          className="border-2 pl-1 border-main-border bg-amber-50 rounded w-[55%] sm:w-[35%]"
        />
        <input
          type="text"
          name="title"
          placeholder="Titre de l'article"
          defaultValue={defaultValues.title}
          required={!isEditing}
          className="border-2 pl-1 border-main-border bg-amber-50 rounded w-[55%] sm:w-[35%]"
        />

        <QuillEditor value={htmlContent} onChange={setHtmlContent} />
        <div className="relative">
          <button
            type="submit"
            className="btn active:brightness-90 active:border-cyan-900"
          >
            {isEditing ? "Modifier" : "Créer"}
          </button>
          {isEditing && (
            <button
              type="button"
              onClick={handleSwitchToCreate}
              className="absolute top-[3px] -right-8 text-2xl text-amber-600 hover:text-amber-800"
              title="Repasser en mode création"
            >
              <IoMdRefresh />
            </button>
          )}{" "}
        </div>
      </form>
    </section>
  );
}
