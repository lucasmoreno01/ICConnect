import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes/AppRoutes";
import { setAuthToken } from "./api/services/apiService";

const token = localStorage.getItem("token");
if (token) setAuthToken(token);



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
