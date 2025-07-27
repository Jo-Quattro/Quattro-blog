import { LoginForm } from "../components/auth//LoginForm";
import { RegisterForm } from "../components/user/RegisterForm";

export function ConnexionRegister() {
  return (
    <section className="py-10 flex max-md:flex-col justify-center gap-5 items-center">
      <LoginForm />
      <h3 className="gradient-title text-[1.5rem] bg-clip-text bg-linear-to-r/hsl from-[rgba(0, 0, 0, 0.55)] to-amber-500">
        Ou bien
      </h3>
      <RegisterForm />
    </section>
  );
}
