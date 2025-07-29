const baseURL = import.meta.env.VITE_API_URL;

export const handleSubmitArticle = async (
  htmlContent: string,
  setHtmlContent: (content: string) => void,
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
