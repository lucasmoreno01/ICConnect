import { api } from "../services/apiService";

export interface UserDTO {
  id?: number;
  name: string;
  email: string;
  matricula: string;
  course?: string;
}

export class UserController {
  static getCurrent() {
    return api.get<UserDTO>("/user/me");
  }

  static update(data: Partial<UserDTO>) {
    return api.put<UserDTO>("/user/me", data);
  }

  static delete() {
    return api.delete("/user/me");
  }
}
