import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./Styles.css"
import Header from "../../components/Header/Header";
import arrow_down from "../../assets/arrow_down.svg";
import search from "../../assets/search.svg";
import { Link } from "react-router-dom"

export default function Courses() {

  return (
    <>
      <Header></Header>

      <div className="container-courses">

        <section className="top-box">

          <div className="graduacao-box">
            <h2 className="graduacao-title">Sistemas de Informação</h2>
            <button className="box-btn"><img className="seta-btn" src={arrow_down} alt="arrow_down" /></button>
          </div>

          <div className="search-box">
            <img className="search-icon" src={search} alt="search-icon" />
            <input className="search-input" type="text" placeholder="Procurar disciplina" />
          </div>

        </section>


        <div className="semestre">
          <h3 className="semestre-title">1º semestre </h3>
          <button className="box-btn btn" data-bs-toggle="collapse" data-bs-target="#card"><img className="seta-btn" src={arrow_down} alt="arrow" /></button>
        </div>

        <div className="courses collapse show" id="card">
          <Link to='/mata02' className="course-link">
            <div className="course-card">
              <span className='course-title'>MATA02</span>
              <span className='course-hour'>90h</span>
            </div>
            <p className='course-name'>Cálculo A</p>
          </Link>

          <Link to='/mata37' className="course-link">
            <div className="course-card">
              <span className='course-title'>MATA37</span>
              <span className='course-hour'>60h</span>
            </div>
            <p className='course-name'>Introdução à Lógica de Programação</p>
          </Link>

          <Link to='/mata39' className="course-link">
            <div className="course-card">
              <span className='course-title'>MATA39</span>
              <span className='course-hour'>45h</span>
            </div>
            <p className='course-name'>Seminários de Introdução ao Curso</p>
          </Link>

          <Link to='/mata42' className="course-link">
            <div className="course-card">
              <span className='course-title'>MATA42</span>
              <span className='course-hour'>60h</span>
            </div>
            <p className='course-name'>Matemática Discreta I</p>
          </Link>

          <Link to='/mata68' className="course-link">
            <div className="course-card">
              <span className='course-title'>MATA68</span>
              <span className='course-hour'>45h</span>
            </div>
            <p className='course-name'>Computador, Ética e Sociedade</p>
          </Link>

        </div>



        <div className="semestre">
          <h3 className="semestre-title">2º semestre</h3>
          <button className="box-btn btn" data-bs-toggle="collapse" data-bs-target="#card2"><img className="seta-btn" src={arrow_down} alt="arrow" /></button>
        </div>

        <div className="courses collapse show" id="card2">
          <Link to='/adme99' className="course-link">
            <div className="course-card">
              <span className='course-title'>ADME99</span>
              <span className='course-hour'>60h</span>
            </div>
            <p className='course-name'>Economia da Inovação</p>
          </Link>

          <Link to='/matc73' className="course-link">
            <div className="course-card">
              <span className='course-title'>MATC73</span>
              <span className='course-hour'>60h</span>
            </div>
            <p className='course-name'>Introdução à Lógica Matemática</p>
          </Link>

          <Link to='/matc90' className="course-link">
            <div className="course-card">
              <span className='course-title'>MATC90</span>
              <span className='course-hour'>60h</span>
            </div>
            <p className='course-name'>Circuitos Digitais e Arquitetura de Computadores</p>
          </Link>

          <Link to='/matc92' className="course-link">
            <div className="course-card">
              <span className='course-title'>MATC92</span>
              <span className='course-hour'>60h</span>
            </div>
            <p className='course-name'>Fundamentos de Sistemas de Informação</p>
          </Link>

          <Link to='/matd04' className="course-link">
            <div className="course-card">
              <span className='course-title'>MATD04</span>
              <span className='course-hour'>60h</span>
            </div>
            <p className='course-name'>Estrutura de Dados</p>
          </Link>

        </div>


        <div className="semestre">
          <h3 className="semestre-title">3º semestre</h3>
          <button className="box-btn btn" data-bs-toggle="collapse" data-bs-target="#card3"><img className="seta-btn" src={arrow_down} alt="arrow" /></button>
        </div>

        <div className="courses collapse show" id="card3">
          <Link to='/adm001' className="course-link">
            <div className="course-card">
              <span className='course-title'>ADM001</span>
              <span className='course-hour'>60h</span>
            </div>
            <p className='course-name'>Introdução à Administração</p>
          </Link>

          <Link to='/mata07' className="course-link">
            <div className="course-card">
              <span className='course-title'>MATA07</span>
              <span className='course-hour'>60h</span>
            </div>
            <p className='course-name'>Álgebra Linear A</p>
          </Link>

          <Link to='/mata55' className="course-link">
            <div className="course-card">
              <span className='course-title'>MATA55</span>
              <span className='course-hour'>60h</span>
            </div>
            <p className='course-name'>Programação Orientada a Objetos</p>
          </Link>

          <Link to='/mata58' className="course-link">
            <div className="course-card">
              <span className='course-title'>MATA58</span>
              <span className='course-hour'>60h</span>
            </div>
            <p className='course-name'>Sistemas Operacionais</p>
          </Link>

          <Link to='/matc94' className="course-link">
            <div className="course-card">
              <span className='course-title'>MATC94</span>
              <span className='course-hour'>60h</span>
            </div>
            <p className='course-name'>Introdução as Linguagens Formais e Teoria da Computação</p>
          </Link>

        </div>

        <div className="semestre">
          <h3 className="semestre-title">4º semestre</h3>
          <button className="box-btn btn" data-bs-toggle="collapse" data-bs-target="#card4"><img className="seta-btn" src={arrow_down} alt="arrow" /></button>
        </div>

        <div className="courses collapse show" id="card4">
          <Link to='/leta09' className="course-link">
            <div className="course-card">
              <span className='course-title'>LETA09</span>
              <span className='course-hour'>60h</span>
            </div>
            <p className='course-name'>Oficina de Leitura e Produção de Textos</p>
          </Link>

          <Link to='/mat236' className="course-link">
            <div className="course-card">
              <span className='course-title'>MAT236</span>
              <span className='course-hour'>60h</span>
            </div>
            <p className='course-name'>Métodos Estatísticos</p>
          </Link>

          <Link to='/mata59' className="course-link">
            <div className="course-card">
              <span className='course-title'>MATA59</span>
              <span className='course-hour'>60h</span>
            </div>
            <p className='course-name'>Redes de Computadores I</p>
          </Link>

          <Link to='/mata62' className="course-link">
            <div className="course-card">
              <span className='course-title'>MATA62</span>
              <span className='course-hour'>60h</span>
            </div>
            <p className='course-name'>Engenharia de Software I</p>
          </Link>

          <Link to='/matc82' className="course-link">
            <div className="course-card">
              <span className='course-title'>MATC82</span>
              <span className='course-hour'>60h</span>
            </div>
            <p className='course-name'>Sistemas Web</p>
          </Link>


        </div>

        <div className="semestre">
          <h3 className="semestre-title">5º semestre</h3>
          <button className="box-btn btn" data-bs-toggle="collapse" data-bs-target="#card5"><img className="seta-btn" src={arrow_down} alt="arrow" /></button>
        </div>

        <div className="courses collapse show" id="card5">
          <Link to='/adm211' className="course-link">
            <div className="course-card">
              <span className='course-title'>ADM211</span>
              <span className='course-hour'>45h</span>
            </div>
            <p className='course-name'>Métodos Quantitativos Aplicados à Administração</p>
          </Link>

          <Link to='/mata56' className="course-link">
            <div className="course-card">
              <span className='course-title'>MATA56</span>
              <span className='course-hour'>60h</span>
            </div>
            <p className='course-name'>Paradigmas de Linguagens de Programação</p>
          </Link>

          <Link to='/mata60' className="course-link">
            <div className="course-card">
              <span className='course-title'>MATA60</span>
              <span className='course-hour'>60h</span>
            </div>
            <p className='course-name'>Banco de Dados</p>
          </Link>

          <Link to='/mata63' className="course-link">
            <div className="course-card">
              <span className='course-title'>MATA63</span>
              <span className='course-hour'>60h</span>
            </div>
            <p className='course-name'>Engenharia de Software II</p>
          </Link>

          <Link to='/matc84' className="course-link">
            <div className="course-card">
              <span className='course-title'>MATC84</span>
              <span className='course-hour'>45h</span>
            </div>
            <p className='course-name'>Laboratório de Programação Web</p>
          </Link>

        </div>


        <div className="semestre">
          <h3 className="semestre-title">6º semestre</h3>
          <button className="box-btn btn" data-bs-toggle="collapse" data-bs-target="#card6"><img className="seta-btn" src={arrow_down} alt="arrow" /></button>
        </div>

        <div className="courses collapse show" id="card6">
          <Link to='/admf01' className="course-link">
            <div className="course-card">
              <span className='course-title'>ADMF01</span>
              <span className='course-hour'>75h</span>
            </div>
            <p className='course-name'>Sistemas de Apoio à Decisão</p>
          </Link>

          <Link to='/mat220' className="course-link">
            <div className="course-card">
              <span className='course-title'>MAT220</span>
              <span className='course-hour'>60h</span>
            </div>
            <p className='course-name'>Empreendedores em Informática</p>
          </Link>

          <Link to='/mata76' className="course-link">
            <div className="course-card">
              <span className='course-title'>MATA76</span>
              <span className='course-hour'>45h</span>
            </div>
            <p className='course-name'>Linguagens para Aplicação Comercial</p>
          </Link>

          <Link to='/matb09' className="course-link">
            <div className="course-card">
              <span className='course-title'>MATB09</span>
              <span className='course-hour'>45h</span>
            </div>
            <p className='course-name'>Laboratório de Banco de Dados</p>
          </Link>

          <Link to='/matc89' className="course-link">
            <div className="course-card">
              <span className='course-title'>MATC89</span>
              <span className='course-hour'>60h</span>
            </div>
            <p className='course-name'>Aplicações para Dispositivos Móveis</p>
          </Link>



        </div>

        <div className="semestre">
          <h3 className="semestre-title">7º semestre</h3>
          <button className="box-btn btn" data-bs-toggle="collapse" data-bs-target="#card7"><img className="seta-btn" src={arrow_down} alt="arrow" /></button>
        </div>

        <div className="courses collapse show" id="card7">
          <Link to='/mata64' className="course-link">
            <div className="course-card">
              <span className='course-title'>MATA64</span>
              <span className='course-hour'>60h</span>
            </div>
            <p className='course-name'>Inteligência Artificial</p>
          </Link>

          <Link to='/matb02' className="course-link">
            <div className="course-card">
              <span className='course-title'>MATB02</span>
              <span className='course-hour'>45h</span>
            </div>
            <p className='course-name'>Qualidade de Software</p>
          </Link>

          <Link to='/matb19' className="course-link">
            <div className="course-card">
              <span className='course-title'>MATB19</span>
              <span className='course-hour'>60h</span>
            </div>
            <p className='course-name'>Sistemas Multimídia</p>
          </Link>

          <Link to='/matc72' className="course-link">
            <div className="course-card">
              <span className='course-title'>MATC72</span>
              <span className='course-hour'>60h</span>
            </div>
            <p className='course-name'>Interação Humano-Computador</p>
          </Link>

          <Link to='/matc99' className="course-link">
            <div className="course-card">
              <span className='course-title'>MATC99</span>
              <span className='course-hour'>60h</span>
            </div>
            <p className='course-name'>Segurança e Auditoria de Sistemas de Informação</p>
          </Link>



        </div>

        <div className="semestre">
          <h3 className="semestre-title">9º semestre</h3>
          <button className="box-btn btn" data-bs-toggle="collapse" data-bs-target="#card9"><img className="seta-btn" src={arrow_down} alt="arrow" /></button>
        </div>

        <div className="courses collapse show" id="card9">
          <Link to='/gicc0003' className="course-link">
            <div className="course-card">
              <span className='course-title'>GICC0003</span>
              <span className='course-hour'>45h</span>
            </div>
            <p className='course-name'>TCC BACHARELADO SISTEMAS DE INFORMAÇÃO I</p>
          </Link>

        </div>

        <div className="semestre">
          <h3 className="semestre-title">10º semestre</h3>
          <button className="box-btn btn" data-bs-toggle="collapse" data-bs-target="#card10"><img className="seta-btn" src={arrow_down} alt="arrow" /></button>
        </div>

        <div className="courses collapse show" id="card10">
          <Link to='/gicc0004' className="course-link">
            <div className="course-card">
              <span className='course-title'>GICC0004</span>
              <span className='course-hour'>120h</span>
            </div>
            <p className='course-name'>TCC BACHARELADO SISTEMAS DE INFORMAÇÃO II</p>
          </Link>


        </div>

      </div>

    </>
  );

} 