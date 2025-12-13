import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles.css";
import eventos from "../../assets/eventos.jpg";
import materias from "../../assets/materias2.jpg";
import vagas from "../../assets/vagas.jpg";
import { Link } from "react-router-dom";

export default function Carousel() {
    return (
        <section
            id="mainCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            <div className="carousel-inner">

                {/* SLIDE 1 - MATÉRIAS */}
                <div className="carousel-item active">
                    <div className="slide-content">
                        <img src={materias} alt="Matérias" className="slide-image" />
                        <div className="slide-text">
                            <h1>Organize seu semestre com facilidade</h1>
                            <p>
                                Descubra todas as matérias disponíveis, visualize por semestre e consulte informações completas como carga horária, ementa e pré-requisitos.
                            </p>
                            <Link to={"/courses"} className="btn btn-primary links-home">Ver matérias</Link>
                        </div>
                    </div>
                </div>

                {/* SLIDE 2 - VAGAS */}
                <div className="carousel-item">
                    <div className="slide-content">
                        <img src={vagas} alt="Vagas" className="slide-image" />
                        <div className="slide-text">
                            <h1>As melhores oportunidades para você crescer</h1>
                            <p>
                                Acompanhe vagas de estágio, trainee e posições júnior atualizadas. Conecte-se com empresas e acelere sua carreira em tecnologia.
                            </p>
                            <Link to={"/vacancies"} className="btn btn-primary links-home">Ver vagas</Link>
                        </div>
                    </div>
                </div>

                {/* SLIDE 3 - EVENTOS */}
                <div className="carousel-item">
                    <div className="slide-content">
                        <img src={eventos} alt="Eventos" className="slide-image" />
                        <div className="slide-text">
                            <h1>Eventos de tecnologia que impulsionam seu futuro</h1>
                            <p>
                                Encontre hackathons, palestras e workshops pensados para estudantes. Fique por dentro do que acontece no universo tech.
                            </p>
                            <Link to={"/events"} className="btn btn-primary links-home">Ver eventos</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTROLES */}
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#mainCarousel"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon icon-prev"></span>
            </button>

            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#mainCarousel"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon icon-next"></span>
            </button>
        </section>
    );
}
