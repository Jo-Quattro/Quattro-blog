import { LoginForm } from "../components/LoginForm";
import { LogoutButton } from "../components/LogoutButton";
import { RegisterForm } from "../components/RegisterForm";

export function ConnexionRegister() {
  return (
    <section className="flex justify-center gap-5 items-center">
      <LoginForm />
      <LogoutButton />
      <p>OU BIEN</p>
      <RegisterForm />
    </section>
  );
}
