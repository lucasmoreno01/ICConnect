export interface LoginRequestDTO {
  email: string
  password: string
}

export interface LoginResponseDTO {
  token: string
  id: number
  email: string
  name: string
  role: string
  matricula: string
  expiresAt: string
}

export interface RegisterRequestDTO {
  email: string
  matricula: string
  password: string
}

export interface RegisterResponseDTO {
  email: string
  matricula: string
  name: string
}
