import AppInput from "../../components/AppInput";
import LoginAside from "../../components/LoginAside";
import "./styles.css";
import { useEffect, useState } from "react";
import { useRegister } from "../../hooks/useAuth";

export default function Register() {
  const { mutate: register, loading, error } = useRegister();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    matricula: "",
    password: "",
    confirmPassword: "",
  });
  
  // No Register/index.tsx
useEffect(() => {
  console.log('🔧 API URL:', import.meta.env.VITE_API_URL);
  console.log('🔧 Dev mode:', import.meta.env.DEV);
}, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }

    if (
      !formData.email ||
      !formData.password ||
      !formData.name ||
      !formData.matricula
    ) {
      alert("Preencha todos os campos obrigatórios");
      return;
    }

    await register({
      email: formData.email,
      password: formData.password,
      name: formData.name,
      matricula: formData.matricula,
    });
  };

  return (
    <main>
      <LoginAside />
      <section aria-labelledby="login-title">
        <h2 id="login-title">Cadastro</h2>
        <form onSubmit={handleSubmit}>
          <AppInput
            type="text"
            name="name"
            placeholder="Seu nome completo"
            label="Nome"
            inputContent={formData.name}
            onChange={handleChange}
            disabled={loading}
          />
          <AppInput
            type="email"
            name="email"
            placeholder="E-mail UFBA"
            label="E-mail UFBA"
            inputContent={formData.email}
            onChange={handleChange}
            disabled={loading}
          />
          <AppInput
            type="text"
            name="matricula"
            placeholder="Sua matrícula"
            label="Matrícula"
            inputContent={formData.matricula}
            onChange={handleChange}
            disabled={loading}
          />
          <AppInput
            type="password"
            name="password"
            placeholder="Senha"
            label="Senha"
            inputContent={formData.password}
            onChange={handleChange}
            disabled={loading}
          />
          <AppInput
            type="password"
            name="confirmPassword"
            placeholder="Confirme sua Senha"
            label="Confirmar senha"
            inputContent={formData.confirmPassword}
            onChange={handleChange}
            disabled={loading}
          />

          {error && <div className="error-message">Erro no cadastro</div>}

          <button id="register-button" type="submit" disabled={loading}>
            {loading ? "Cadastrando..." : "Cadastre-se"}
          </button>
        </form>
      </section>
    </main>
  );
}
