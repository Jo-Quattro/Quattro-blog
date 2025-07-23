const baseURL = import.meta.env.VITE_API_URL;

export const handleRegister = async (
  event: React.FormEvent<HTMLFormElement>,
  setSuccessMessage: (message: string) => void
) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = form.get("name") as string;
  const email = form.get("email") as string;
  const password = form.get("password") as string;
  const passwordConfirm = form.get("passwordConfirm") as string;

  if (password !== passwordConfirm) {
    setSuccessMessage("Les mots de passe ne correspondent pas.");
    return;
  }
  const formData = {
    name,
    email,
    password,
  };

  try {
    const response = await fetch(`${baseURL}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();

    if (response.ok) {
      setSuccessMessage("Compte créé avec succès !");
    } else {
      setSuccessMessage(`Erreur : ${data.message || "Inconnue"}`);
    }
  } catch (err) {
    setSuccessMessage("Une erreur est survenue. Veuillez réessayer.");
  }
};
