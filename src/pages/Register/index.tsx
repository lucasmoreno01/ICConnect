import AppInput from "../../components/AppInput";
import LoginAside from "../../components/LoginAside";
import "./Styles.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  return (
    <main>
      <LoginAside />
      <section aria-labelledby="login-title">
        <h2 id="login-title">Cadastro</h2>
        <form>
          <AppInput
            type="text"
            name="user-input"
            placeholder="Seu nome completo"
            label="Nome"
          />
          <AppInput
            type="email"
            name="email-input"
            placeholder="E-mail UFBA"
            label="E-mail UFBA"
          />
          <AppInput
            type="password"
            name="password-input"
            placeholder="Senha"
            label="Senha"
          />
          <AppInput
            type="password"
            name="confirm-password-input"
            placeholder="Confirme sua Senha"
            label="Confirmar senha"
          />

          <button id="register-button" onClick={() => navigate("/login")}>
            Cadastre-se
          </button>
        </form>
      </section>
    </main>
  );
}
