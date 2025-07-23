import { useState } from "react";
import { handleRegister } from "../services/handleRegister";

export function RegisterForm() {
  const [successMessage, setSuccessMessage] = useState("");
  return (
    <section className="flex flex-col gap-2 justify-center">
      <h3 className="text-center">Créez un compte</h3>

      <form
        onSubmit={(e) => handleRegister(e, setSuccessMessage)}
        className="w-65 p-5 flex gap-8 flex-col justify-center items-center rounded-2xl border-2 shadow-amber-700 shadow border-amber-700"
      >
        <div className="flex flex-col">
          <input
            aria-label="email"
            placeholder="Votre email *"
            type="email"
            name="email"
            required
            className="border-2 pl-1 border-amber-800 bg-amber-50 rounded"
          />
        </div>
        <div className="flex flex-col">
          <input
            aria-label="name"
            placeholder="Votre prénom *"
            type="text"
            name="name"
            required
            className="border-2 pl-1 border-amber-800 bg-amber-50 rounded"
          />
        </div>
        <div className="flex flex-col">
          <input
            aria-label="password"
            placeholder="Mot de passe *"
            type="password"
            name="password"
            required
            className="border-2 pl-1 border-amber-800 bg-amber-50 rounded"
          />
        </div>
        <div className="flex flex-col">
          <input
            aria-label="confirm password"
            placeholder="Confirmez le MDP *"
            type="password"
            name="passwordConfirm"
            required
            className="border-2 pl-1 border-amber-800 bg-amber-50 rounded"
          />
        </div>
        <div className="flex justify-center gap-2">
          <input
            aria-label="cgu"
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
        <button
          type="submit"
          className="rounded border-2 border-amber-600 bg-amber-200 w-fit px-2 m-auto active:brightness-90 active:border-cyan-900"
        >
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
