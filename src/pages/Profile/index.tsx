import Header from "../../components/Header/Header";
import "./Styles.css";

export default function Profile() {
  return (
    <>
      <Header />

      <aside id='profile-menu'>
        <button value="edit-profile" className="active">
          Editar perfil
        </button>
        <button value="change-password" className="inactive">
          Alterar senha
        </button>
        <button value="exit" className="exit-button">
          Sair
        </button>
      </aside>

      <section className='user-info'>


      </section>
    </>
  );
}
