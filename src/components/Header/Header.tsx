import { useState } from "react";
import { Link } from "react-router-dom";
import "./Styles.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="box-title">
          <h1 className="title">ICConnect</h1>
        </div>

        <nav className="menu-desktop">
          <ul className="menu-options">
            <li><Link to="/home" className="menu-links">Home</Link></li>
            <li><Link to="/courses" className="menu-links">Matérias</Link></li>
            <li><Link to="/events" className="menu-links">Eventos</Link></li>
            <li><Link to="/vacancies" className="menu-links">Vagas</Link></li>
            <li><Link to="/profile" className="menu-links">Meu Perfil</Link></li>
          </ul>
        </nav>

        <button className="menu-btn" onClick={() => setOpen(true)}>
          ☰
        </button>
      </header>

      <div className={`menu-overlay ${open ? "show" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>×</button>

        <nav className="menu-full">
          <ul>
            <li>
              <Link to="/courses" onClick={() => setOpen(false)}>
                <span>Matérias</span>
                <span className="arrow">›</span>
              </Link>
            </li>
            <li>
              <Link to="/events" onClick={() => setOpen(false)}>
                <span>Eventos</span>
                <span className="arrow">›</span>
              </Link>
            </li>
            <li>
              <Link to="/vacancies" onClick={() => setOpen(false)}>
                <span>Vagas</span>
                <span className="arrow">›</span>
              </Link>
            </li>
            <li>
              <Link to="/profile" onClick={() => setOpen(false)}>
                <span>Meu Perfil</span>
                <span className="arrow">›</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
