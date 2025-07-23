import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from "../components/RegisterForm";

export function ConnexionRegister() {
  return (
    <section className="flex justify-center gap-5 items-center">
      <LoginForm />
      <p>OU BIEN</p>
      <RegisterForm />
    </section>
  );
}
