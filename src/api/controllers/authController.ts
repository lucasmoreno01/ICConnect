import { api } from "../services/apiService";

import type {
  LoginRequestDTO,
  LoginResponseDTO,
  RegisterRequestDTO,
  RegisterResponseDTO
} from "../types/auth";

export class AuthController {
  static login(data: LoginRequestDTO) {
    return api.post<LoginResponseDTO>("/auth/login", data);
  }

  static register(data: RegisterRequestDTO) {
    return api.post<RegisterResponseDTO>("/auth/register", data);
  }
}
