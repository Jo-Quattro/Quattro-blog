import { useState } from "react";
import { handleRegister } from "../../services/handleRegister";
/* import { countCharacters } from "../../services/countCharacters"; */
export function RegisterForm() {
  /*   const [count, setCount] = useState<number>(0); */
  const [successMessage, setSuccessMessage] = useState("");
  return (
    <section className="flex flex-col gap-2 justify-center">
      <h2 className="gradient-title text-[1.5rem] bg-clip-text bg-linear-to-r/hsl from-[rgba(0, 0, 0, 0.55)] to-amber-500">
        Crée un compte
      </h2>

      <form
        onSubmit={(e) => handleRegister(e, setSuccessMessage)}
        className="w-65 p-5 flex gap-8 flex-col justify-center items-center rounded-2xl border-2 shadow-main-border shadow border-main-border"
      >
        <div className="flex flex-col">
          <input
            aria-label="email"
            placeholder="Ton email *"
            type="email"
            name="email"
            required
            className="border-2 pl-1 border-main-border bg-amber-50 rounded"
          />
        </div>
        <div className="flex flex-col">
          <input
            aria-label="name"
            placeholder="Ton prénom *"
            type="text"
            name="name"
            required
            className="border-2 pl-1 border-main-border bg-amber-50 rounded"
          />
        </div>
        <div className="flex flex-col">
          <input
            aria-label="password"
            placeholder="Mot de passe *"
            type="password"
            name="password"
            required
            className="input-border"
            /*    onChange={(e) => countCharacters(e, setCount)} */
          />
        </div>
        <div className="flex flex-col">
          <input
            aria-label="confirm password"
            placeholder="Confirme ton MDP *"
            type="password"
            name="passwordConfirm"
            required
            className="input-border"
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
          className="btn w-35 active:brightness-90 active:border-cyan-900"
        >
          Crée ton compte{" "}
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
