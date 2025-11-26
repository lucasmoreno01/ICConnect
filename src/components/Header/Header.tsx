import "./Styles.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="box-title">
        <h1 className="title">ICConnect</h1>
      </div>

      <nav className="menu">
        <ul className="menu-options">
          <li>
            <Link to="/courses" className="menu-links">
              Matérias
            </Link>
          </li>
          <li>
            <Link to="/events" className="menu-links">
              Eventos
            </Link>
          </li>
          <li>
            <Link to="/vacancies" className="menu-links">
              Vagas
            </Link>
          </li>
          <li>
            <Link to="/profile" className="menu-links">
              Meu Perfil
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
