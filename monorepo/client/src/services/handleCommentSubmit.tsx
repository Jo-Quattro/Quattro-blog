const baseURL = import.meta.env.VITE_API_URL;

export async function handleCommentSubmit(
  event: React.FormEvent<HTMLFormElement>,
  article_id: number,
  setIsSent: React.Dispatch<React.SetStateAction<Boolean | null>>,
  setTextArea: React.Dispatch<React.SetStateAction<string>>
) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const formData = {
    text: form.get("comment") as string,
    article_id,
  };

  try {
    const response = await fetch(`${baseURL}/api/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    });
    setIsSent(true);
    setTimeout(() => setIsSent(null), 500);
    setTextArea("");
    if (!response.ok) {
      throw new Error("Erreur lors de l'envoi du commentaire");
    }
  } catch (err) {
    console.error(err);
    alert("Erreur de connexion");
  }
}
