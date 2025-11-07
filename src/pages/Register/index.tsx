import LoginAside from "../../components/LoginAside";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  return (
    <main>
      <LoginAside />
      <section aria-labelledby="login-title">
        <h2 id="login-title">Cadastro</h2>
        <form>
          <label>
            Nome Completo
            <input type="text" name="usuario" placeholder="Login" />
          </label>
          <label >
            <span>E-mail <strong >UFBA</strong></span>
            <input type="email" name="email" placeholder="E-mail" />
          </label>
          <label>
            Senha
            <input type="password" name="senha" placeholder="Senha" />
          </label>
          <label>
            Confirmar Senha
            <input type="password" name="confirmar-senha" placeholder="Senha" />
          </label>
          <button id="register-button" onClick={() => navigate("/login")}>
            Cadastre-se
          </button>
        </form>
      </section>
    </main>
  );
}
