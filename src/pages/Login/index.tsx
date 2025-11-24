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
   
          <label>
            Senha
            <input type="password" name="senha" placeholder="Senha" />
          </label>
          <button id="login-button" type="submit">
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
