import { handleLogin } from "../../services/handleLogin";
export function LoginForm() {
  return (
    <section className="flex flex-col gap-2 justify-center">
      <h2 className="gradient-title text-[1.5rem] bg-clip-text bg-linear-to-r/hsl from-[rgba(0, 0, 0, 0.55)] to-amber-500">
        Connecte toi
      </h2>
      <form
        onSubmit={handleLogin}
        className="card-border w-65 p-5 flex gap-8 flex-col justify-center items-center border-2"
      >
        <div className="">
          <input
            aria-label="email"
            type="email"
            name="email"
            placeholder="Ton email"
            required
            className="input-border"
          />
        </div>
        <div>
          <input
            aria-label="password"
            type="password"
            name="password"
            placeholder="Ton mot de passe"
            required
            className="input-border"
          />
        </div>
        <button
          type="submit"
          className="btn active:brightness-90 active:border-cyan-900"
        >
          Connexion
        </button>
      </form>
    </section>
  );
}
