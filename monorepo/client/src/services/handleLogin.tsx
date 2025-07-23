const baseURL = import.meta.env.VITE_API_URL;

export const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const formData = {
    email: form.get("email") as string,
    password: form.get("password") as string,
  };

  try {
    const response = await fetch(`${baseURL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Identifiants invalides");
    }

    /*  const data = await response.json();
      setAuth(data); */

    window.location.reload();
  } catch (err) {
    console.error(err);
    alert("Erreur de connexion");
  }
};
