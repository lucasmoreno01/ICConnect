import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles.css";
import eventos from "../../assets/eventos.jpg";
import materias from "../../assets/materias2.jpg";
import ai from "../../assets/ai.jpg";
import quantum from "../../assets/quantum.jpg";
import { Link } from "react-router-dom";

export default function Carousel() {
    return (
        <section
            id="mainCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            <div className="carousel-inner">

                
                <div className="carousel-item active">
                    <div className="slide-content">
                        <img src={materias} alt="Matérias" className="slide-image" />
                        <div className="slide-text">
                            <h1>Organize seu semestre com facilidade</h1>
                            <p>
                                Descubra todas as matérias do curso, visualize por semestre e consulte diversas informações como carga horária, ementa e professores. Visualize e colabore com comentários sobre os professores e avaliações de cada matéria.
                            </p>
                            <Link to={"/courses"} className="btn btn-primary links-home">Ver matérias</Link>
                        </div>
                    </div>
                </div>

               
                <div className="carousel-item">
                    <div className="slide-content">
                        <img src={ai} alt="ai" className="slide-image" />
                        <div className="slide-text">
                            <h1>Inteligência artificial: o alerta de mil especialistas sobre 'risco para a humanidade'</h1>
                            <p>
                                Na carta, eles pedem que as empresas que desenvolvem esse tipo de programa "pausem imediatamente, por pelo menos seis meses, o treinamento de sistemas de inteligência artificial mais poderosos que o GPT-4".
                            </p>
                            <a href="https://www.correiobraziliense.com.br/tecnologia/2023/03/5083955-inteligencia-artificial-o-alerta-de-mil-especialistas-sobre-risco-para-a-humanidade.html?gad_source=1&gad_campaignid=22920091152&gbraid=0AAAAAphZalfiNf4I-7nFrV2FIO_sxLcWk&gclid=Cj0KCQiAjJTKBhCjARIsAIMC44_HKiBqQ0PSb5hayP0M2_3Z0dSrzE5VxPuLWTXzcJldP7b2Wlqn_GEaAjsuEALw_wcB#google_vignette" className="btn btn-primary links-home" target="_blank" rel="noopener noreferrer">Ler mais</a>
                        </div>
                    </div>
                </div>

                
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

                <div className="carousel-item">
                    <div className="slide-content">
                        <img src={quantum} alt="Quantum" className="slide-image" />
                        <div className="slide-text">
                            <h1>Brasil avança na corrida das tecnologias quânticas</h1>
                            <p>
                                O primeiro Laboratório de Tecnologias Quânticas do Centro Brasileiro de Pesquisas Físicas (CBPF), unidade vinculada ao Ministério da Ciência, Tecnologia e Inovação, terá papel estratégico para o desenvolvimento das tecnologias quânticas no país
                            </p>
                            <a href="https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/noticias/2025/01/brasil-avanca-na-corrida-das-tecnologias-quanticas" className="btn btn-primary links-home" target="_blank" rel="noopener noreferrer">Ler mais</a>
                        </div>
                    </div>
                </div>

                
            </div>

            

            
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
