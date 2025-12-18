export interface LoginRequestDTO {
  email: string;
  password: string;
}

export interface RegisterRequestDTO {
  email: string;
  password: string;
  name: string;
  matricula: string;
}

export interface LoginResponseDTO {
  Token: string;
  id: number;
  email: string;
  name: string;
  matricula: string;
  expiresAt: string;
}

export interface RegisterResponseDTO {
  email: string;
  matricula: string;
  name: string;
  id?: number;
}

export interface User {
  id: number;
  email: string;
  name: string;
  matricula: string;
}