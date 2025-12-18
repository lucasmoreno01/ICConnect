import { useNavigate } from "react-router-dom";
import { useMutation } from "./useMutation";
import { AuthController } from "../api/controllers/authController";

// hooks/useAuth.ts
export function useLogin() {
  const navigate = useNavigate();
  return useMutation(AuthController.login, {
    onSuccess: (response) => {
      localStorage.setItem("token", response.Token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: response.id,
          email: response.email,
          name: response.name,
          matricula: response.matricula,
        })
      );
      localStorage.setItem("expires", response.expiresAt);
      navigate("/courses");
    },
  });
}

export function useRegister() {
  const navigate = useNavigate();
  return useMutation(AuthController.register, {
    onSuccess: () => {
      alert("Cadastro realizado! Faça login.");
      navigate("/login");
    },
  });
}