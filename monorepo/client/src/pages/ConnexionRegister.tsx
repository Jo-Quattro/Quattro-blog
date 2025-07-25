import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from "../components/RegisterForm";

export function ConnexionRegister() {
  return (
    <section className="py-10 flex max-md:flex-col justify-center gap-5 items-center">
      <LoginForm />
      <p>OU BIEN</p>
      <RegisterForm />
    </section>
  );
}
