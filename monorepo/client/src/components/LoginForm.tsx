import { handleLogin } from "../services/handleLogin";

export function LoginForm() {
  return (
    <section className="flex flex-col gap-2 justify-center">
      <h3 className="text-center">Connectez-vous</h3>
      <form
        onSubmit={handleLogin}
        className="w-65 p-5 flex gap-8 flex-col justify-center items-center rounded-2xl border-2 shadow-amber-700 shadow border-amber-700"
      >
        <div className="">
          <input
            aria-label="email"
            type="email"
            name="email"
            placeholder="Votre email"
            required
            className="border-2 pl-1 border-amber-800 bg-amber-50 rounded"
          />
        </div>
        <div>
          <input
            aria-label="password"
            type="password"
            name="password"
            placeholder="Votre mot de passe"
            required
            className="border-2 pl-1 border-amber-800 bg-amber-50 rounded"
          />
        </div>
        <button
          type="submit"
          className="rounded border-2 border-amber-600 bg-amber-200 w-fit px-2 m-auto active:brightness-90 active:border-cyan-900"
        >
          Connexion
        </button>
      </form>
    </section>
  );
}
