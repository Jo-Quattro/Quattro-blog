import { handleLogin } from "../../services/handleLogin";
export function LoginForm() {
  return (
    <section className="flex flex-col gap-2 justify-center">
      <h2 className="text-center ">Connecte-toi</h2>
      <form
        onSubmit={handleLogin}
        className="w-65 p-5 flex gap-8 flex-col justify-center items-center rounded-2xl border-2 shadow shadow-mainBorder  border-mainBorder"
      >
        <div className="">
          <input
            aria-label="email"
            type="email"
            name="email"
            placeholder="Ton email"
            required
            className="border-2 pl-1 border-mainBorder bg-amber-50 rounded"
          />
        </div>
        <div>
          <input
            aria-label="password"
            type="password"
            name="password"
            placeholder="Ton mot de passe"
            required
            className="border-2 pl-1 border-mainBorder bg-amber-50 rounded"
          />
        </div>
        <button
          type="submit"
          className="rounded border-2 font-semibold border-buttonBorder bg-secondTheme w-fit px-2 m-auto active:brightness-90 active:border-cyan-900"
        >
          Connexion
        </button>
      </form>
    </section>
  );
}
