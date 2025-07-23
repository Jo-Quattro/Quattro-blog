import { handleLogin } from "../services/handleLogin";

export function LoginForm() {
  return (
    <section className="flex flex-col gap-2 justify-center">
      <h3 className="text-center">Connectez-vous</h3>
      <form
        onSubmit={handleLogin}
        className="w-60  p-5 flex gap-6 flex-col justify-center rounded-2xl border-2 border-zinc-500"
      >
        <div className="credentials-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            required
            className="border pl-1 border-black rounded"
          />
        </div>
        <div className="credentials-input">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            name="password"
            placeholder="Votre mot de passe"
            required
            className="border pl-1 border-black rounded"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </section>
  );
}
