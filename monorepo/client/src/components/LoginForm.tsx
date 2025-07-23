/* import { useOutletContext } from "react-router"; */

/* type User = {
  id: number;
  email: string;
  is_admin: boolean;
};

type Auth = {
  user: User;
  token: string;
};
 */
export function LoginForm() {
  const baseURL = import.meta.env.VITE_API_URL;

  /*  const { setAuth } = useOutletContext() as {
    auth: Auth | null;
    setAuth: (auth: Auth | null) => void;
  }; */

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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

  return (
    <section className="flex flex-col gap-2 justify-center">
      <h3 className="text-center">Connectez-vous</h3>
      <form
        onSubmit={handleSubmit}
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
