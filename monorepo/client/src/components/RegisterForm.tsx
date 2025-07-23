import { useState } from "react";

export function RegisterForm() {
  const [successMessage, setSuccessMessage] = useState("");
  const baseURL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
  return (
    <section className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-60  p-5 flex gap-6 flex-col justify-center rounded-2xl border-2 border-zinc-500"
      >
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            placeholder="Votre email"
            type="email"
            name="email"
            required
            className="border pl-1 border-black rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">Prénom</label>
          <input
            placeholder="Votre prénom"
            type="text"
            name="name"
            required
            className="border pl-1 border-black rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Mot de passe</label>
          <input
            placeholder="Mot de passe"
            type="password"
            name="password"
            required
            className="border pl-1 border-black rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="passwordConfirm">Confirmez votre mot de passe</label>
          <input
            placeholder="Mot de passe"
            type="password"
            name="passwordConfirm"
            required
            className="border pl-1 border-black rounded"
          />
        </div>
        <div className="flex justify-center gap-2">
          <input
            type="checkbox"
            id="accept_cgu"
            name="accept_cgu"
            required
            className="border border-black rounded"
          />
          <label htmlFor="accept_cgu" className="text-sm">
            J'accepte les{" "}
            <a href="/cgu" target="_blank" className="underline">
              CGU
            </a>
          </label>
        </div>
        <button type="submit" className="rounded border w-fit px-2 m-auto">
          Créez votre compte{" "}
        </button>
        {successMessage && (
          <p
            className={`${
              successMessage === "Compte créé avec succès !"
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {successMessage}
          </p>
        )}
      </form>
    </section>
  );
}
