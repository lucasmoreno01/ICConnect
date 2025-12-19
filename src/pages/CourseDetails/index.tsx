import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { coursesData } from "../../utils/coursesData";
import "./Styles.css"; 

export default function CourseDetails() {
  const { id } = useParams(); 
  const courseData = id ? coursesData[id.toLowerCase()] : null;

  const [activeModal, setActiveModal] = useState<'view' | 'post' | null>(null);
  const [selectedProfessor, setSelectedProfessor] = useState<any>(null);
  const [commentText, setCommentText] = useState("");

  const [professorsList, setProfessorsList] = useState<any[]>([]);

  const [comments, setComments] = useState([
    "Ótimo professor, explica com bastante didática e as provas são de acordo com o conteúdo",
    "Gosto bastante da metodologia dele",
    "Bom professor, porém atrasa para corrigir as provas",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum."
  ]);

  useEffect(() => {
    if (courseData) {
      setProfessorsList(courseData.professors);
    }
  }, [courseData]);

  function handleToggleLike(index: number) {
    const updatedProfessors = [...professorsList];
    const prof = updatedProfessors[index];
    prof.liked = !prof.liked;
    if (prof.liked) {
      prof.recommendations += 1;
    } else {
      prof.recommendations -= 1;
    }

    setProfessorsList(updatedProfessors);
  }

  function handleOpenViewComments(professor: any) {
    setSelectedProfessor(professor);
    setActiveModal('view');
  }

  function handleOpenPostComment(professor: any) {
    setSelectedProfessor(professor);
    setActiveModal('post');
    setCommentText(""); 
  }

  function handleClose() {
    setActiveModal(null);
    setSelectedProfessor(null);
  }

  function handleSubmitComment() {
    if (!commentText.trim()) return;
    setComments([commentText, ...comments]);
    handleClose();
  }

  if (!courseData) {
    return (
      <>
        <Header />
        <div className="container-details">
          <h2>Disciplina não encontrada.</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container-details">
        <div className="course-header-text">
          <h1>{courseData.name} - {courseData.code}</h1>
          <p className="course-description">{courseData.description}</p>
        </div>

        <h2 className="section-title">Professores</h2>

        <div className="professors-list">
          {professorsList.map((prof: any, index: number) => (
            <div key={index} className="professor-card">
              <div className="card-header-prof">
                <span className="prof-name">{prof.name}</span>
                <span 
                  className={`heart-icon ${prof.liked ? 'liked' : ''}`}
                  onClick={() => handleToggleLike(index)}
                >
                  {prof.liked ? (
                    <img src="src/assets/favorite_red.png" alt="Favoritado" />
                  ) : (
                    <img src="src/assets/favorite.png" alt="Favoritar" />
                  )} 
                </span>
              </div>
              <p className="recommendations">
                {prof.recommendations} pessoas recomendam este professor
              </p>
              
              <div className="card-actions">
                <button 
                  className="btn-see-comments"
                  onClick={() => handleOpenViewComments(prof)}
                >
                  Ver Comentarios
                </button>
                <button 
                  className="btn-comment"
                  onClick={() => handleOpenPostComment(prof)}
                >
                  Comente
                </button>
              </div>
            </div>
          ))}
        </div>

        <a href="#" className="link-activities">
          Acesse as provas e atividades desta disciplina
        </a>
      </div>

      {activeModal === 'view' && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content view-comments-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Comentários - {selectedProfessor?.name}</h3>
            
            <div className="comments-scroll-list">
              {comments.map((text, i) => (
                <div key={i} className="comment-bubble">
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeModal === 'post' && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content post-comment-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Avalie {selectedProfessor?.name}</h3>
            
            <p className="modal-subtitle">
              Não se preocupe, todos os comentários são anônimos, seu nome não será revelado
            </p>

            <div className="textarea-container">
              <textarea 
                autoFocus
                placeholder="Deixe seu comentário"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                maxLength={2000}
              />
              <span 
                className="char-counter"
                style={{
                  color: commentText.length > 1900 ? 'red' : 'inherit',
                  fontWeight: commentText.length > 1900 ? 'bold' : 'normal'
                }}
              >
                {commentText.length}/2000
              </span>
            </div>

            <div className="modal-actions">
              <button className="btn-cancel-modal" onClick={handleClose}>
                Cancelar
              </button>
              <button className="btn-confirm-modal" onClick={handleSubmitComment}>
                Comentar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}