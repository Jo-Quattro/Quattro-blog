const baseURL = import.meta.env.VITE_API_URL;

export const handleDeleteArticle = async (id: number) => {
  const res = await fetch(`${baseURL}/api/delete/article`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  if (res.ok) {
    window.location.reload();
    alert("Article supprimé avec succès !");
  } else {
    alert("Erreur lors de la suppression");
    console.log(res);
  }
};
