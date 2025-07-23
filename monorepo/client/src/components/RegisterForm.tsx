import { useState } from "react";
import { handleRegister } from "../services/handleRegister";

export function RegisterForm() {
  const [successMessage, setSuccessMessage] = useState("");
  return (
    <section className="flex flex-col gap-2 justify-center">
      <h3 className="text-center">Créez un compte</h3>

      <form
        onSubmit={(e) => handleRegister(e, setSuccessMessage)}
        className="w-60  p-5 flex gap-6 flex-col justify-center rounded-2xl border-2 border-zinc-500"
      >
        <div className="flex flex-col">
          <label htmlFor="email">Email *</label>
          <input
            placeholder="Votre email"
            type="email"
            name="email"
            required
            className="border pl-1 border-black rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">Prénom *</label>
          <input
            placeholder="Votre prénom"
            type="text"
            name="name"
            required
            className="border pl-1 border-black rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Mot de passe *</label>
          <input
            placeholder="Mot de passe"
            type="password"
            name="password"
            required
            className="border pl-1 border-black rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="passwordConfirm">
            Confirmez votre mot de passe *
          </label>
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
            </a>{" "}
            *
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
