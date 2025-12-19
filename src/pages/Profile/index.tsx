import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import "./Styles.css";
import { useNavigate } from "react-router-dom";
import { UserController, type UserDTO } from "../../api/controllers/userContoller";

export default function Profile() {
  const [user, setUser] = useState<UserDTO>({
    name: "",
    matricula: "",
    email: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await UserController.getCurrent();
        setUser(data);
      } catch (err) {
        console.error("Erro ao carregar usuário:", err);
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      <Header />

      <main id="profile-page">
        <section className="profile-card">
          <div className="profile-field">
            <label>Nome:</label>
            <span>{user.name}</span>
          </div>

          <div className="profile-field">
            <label>Matrícula:</label>
            <span>{user.matricula}</span>
          </div>

          <div className="profile-field">
            <label>E-mail UFBA:</label>
            <span>{user.email}</span>
          </div>

          <button className="exit-button" onClick={() => navigate("/login")}>
            Sair
          </button>
        </section>
      </main>
    </>
  );
}
