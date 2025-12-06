import { http } from "../http";

export const api = {
  get: async <T>(url: string) => {
    const response = await http.get<T>(url);
    return response.data;
  },

  post: async <T>(url: string, body: unknown) => {
    const response = await http.post<T>(url, body);
    return response.data;
  }
};
