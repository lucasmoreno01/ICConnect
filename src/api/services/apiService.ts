import { http } from "../http";

const getBaseURL = () => {
  if (import.meta.env.PROD) {
    return import.meta.env.VITE_API_URL || 'https://api.seudominio.com';
  } else {
    return '/api';
  }
};
export let authToken: string | null = null;

export const setAuthToken = (token: string) => {
  authToken = token;
};

http.defaults.baseURL = getBaseURL();

export const api = {
  get: async <T>(url: string) => {
    console.log(` GET: ${url}`);
    const response = await http.get<T>(url, {
      headers: authToken ? { Authorization: `Bearer ${authToken}` } : {}
    });
    return response.data;
  },

  post: async <T>(url: string, body: unknown) => {
    console.log(`POST: ${url}`, body);
    const response = await http.post<T>(url, body, {
      headers: authToken ? { Authorization: `Bearer ${authToken}` } : {}
    });
    return response.data;
  },

  put: async <T>(url: string, body: unknown) => {
    const response = await http.put<T>(url, body, {
      headers: authToken ? { Authorization: `Bearer ${authToken}` } : {}
    });
    return response.data;
  },

  delete: async <T>(url: string) => {
    const response = await http.delete<T>(url, {
      headers: authToken ? { Authorization: `Bearer ${authToken}` } : {}
    });
    return response.data;
  }
};
