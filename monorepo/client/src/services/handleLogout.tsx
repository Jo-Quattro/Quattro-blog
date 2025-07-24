const baseURL = import.meta.env.VITE_API_URL;

export const handleLogout = async () => {
  try {
    await fetch(`${baseURL}/api/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    console.info("Déconnecté");
    window.location.reload();
  } catch (err) {
    console.error(err);
    alert("Erreur lors de la déconnexion");
  }
};
