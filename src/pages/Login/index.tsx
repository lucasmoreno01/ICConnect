import AppInput from "../../components/AppInput";
import LoginAside from "../../components/LoginAside";
import "./styles.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <main>
      <LoginAside />
      <section aria-labelledby="login-title">
        <h2 id="login-title">Login</h2>
        <form>
          <AppInput
            type="email"
            name="login-input"
            placeholder="Login"
            label="Login"
          />
          <AppInput
            type="password"
            name="password-input"
            placeholder="Senha"
            label="Senha"
          />

          <button id="login-button" type="submit" onClick={() => navigate("/courses")}>
            Entrar
          </button>
          <button id="register-button" onClick={() => navigate("/register")}>
            Cadastre-se
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
