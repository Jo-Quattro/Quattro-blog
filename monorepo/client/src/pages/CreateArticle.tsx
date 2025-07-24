import { useEffect, useState } from "react";
import { QuillEditor } from "../components/quill/QuillEditor";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";

const baseURL = import.meta.env.VITE_API_URL;

export function CreateArticle() {
  const [htmlContent, setHtmlContent] = useState("");
  const isAuth = useAuth();

  const handleSubmitArticle = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const title = formData.get("title") as string;

    const res = await fetch(`${baseURL}/api/create/article`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content: htmlContent }),
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
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth === false) {
      navigate("/connexionInscription");
    }
  }, [isAuth, navigate]);

  if (isAuth === null) {
    return <p className="text-center mt-10">Chargement...</p>;
  }

  if (!isAuth) return null;
  if (isAuth === null) {
    return <p className="text-center mt-10">Chargement...</p>; // au cas où
  }

  return (
    <section className="py-10 flex flex-col items-center gap-5">
      <h2 className="text-center">Crée ton article personnalisé</h2>

      <form
        onSubmit={handleSubmitArticle}
        className="w-full max-w-4xl flex flex-col items-center gap-5"
      >
        <input
          aria-label="Article title"
          type="text"
          name="title"
          placeholder="Titre de l'article"
          required
          className="border-2 pl-1 border-mainBorder bg-amber-50 rounded w-full"
        />

        <QuillEditor value={htmlContent} onChange={setHtmlContent} />

        <button
          type="submit"
          className="rounded border-2 border-buttonBorder bg-secondTheme w-fit px-2 m-auto active:brightness-90 active:border-cyan-900"
        >
          Créez ton article
        </button>
      </form>
    </section>
  );
}
