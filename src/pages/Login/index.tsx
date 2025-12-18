import { useState } from "react";
import AppInput from "../../components/AppInput";
import LoginAside from "../../components/LoginAside";
import "./styles.css";
import { useLogin } from "../../hooks/useAuth";



export default function Login() {
  const { mutate: login, loading, error } = useLogin();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) return;
    await login(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({...prev, [name]: value}));
  };

  return (
    <main>
      <LoginAside />
      <section aria-labelledby="login-title">
        <h2 id="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <AppInput
            type="email"
            name="email"
            placeholder="Login"
            label="Login"
            inputContent={formData.email}
            onChange={handleChange}
          />
          <AppInput
            type="password"
            name="password"
            placeholder="Senha"
            label="Senha"
            inputContent={formData.password}
            onChange={handleChange}
          />

          {error && <div className="error-message">Erro ao fazer login</div>}

          <button id="login-button" type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </button>
          <button 
            id="register-button" 
            type="button"
            onClick={() => window.location.href = "/register"}
            disabled={loading}
          >
            Cadastre-se
          </button>
        </form>
      </section>
    </main>
  );
}