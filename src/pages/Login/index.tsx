import LoginAside from "../../components/LoginAside";
import "./styles.css";

function Login() {
  return (
    <main>
      <LoginAside />
      <section aria-labelledby="login-title">
        <h2 id="login-title">Login</h2>
        <form>
          <label>
            Usuário
            <input type="text" name="usuario" placeholder="Login" />
          </label>
          <label>
            Senha
            <input type="password" name="senha" placeholder="Senha" />
          </label>
        <button id="login-button" type="submit">Entrar</button>
          <button id="register-button">Cadastre-se</button>
        </form>
      </section>
    </main>
  );
}

export default Login;
