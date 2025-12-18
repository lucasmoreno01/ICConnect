import "./Styles.css";
import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  teacherName: string;
}

interface AddCommentModalProps extends ModalProps {
  onSubmit: (comment: string) => void;
}

interface TeacherCardProps {
  teacherName?: string;
  recommendations?: number;
  isInitiallyFavorite?: boolean;
}

const FavoriteFilledIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff4757">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const FavoriteOutlinedIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

interface Comment {
  id: number;
  text: string;
  author: string;
  isBold: boolean;
}

const ViewCommentsModal: React.FC<ModalProps> = ({ isOpen, onClose, teacherName }) => {
  if (!isOpen) return null;

  const comments: Comment[] = [
    {
      id: 1,
      text: "Ótimo professor, explica com bastante didática e as provas são de acordo com o conteúdo",
      author: "Gosto bastante da metodologia dele",
      isBold: true
    },
    {
      id: 2,
      text: "Bom professor, porém atrasa para corrigir as provas",
      author: "Estudante Anônimo",
      isBold: false
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Estudante Anônimo",
      isBold: false
    },
    {
      id: 4,
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Estudante Anônimo",
      isBold: false
    },
    {
      id: 5,
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non.",
      author: "Estudante Anônimo",
      isBold: false
    }
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Comentários sobre {teacherName}</h2>
         
        </div>
        
        <div className="modal-body">
          <div className="comments-list">
            {comments.map((comment) => (
              <div key={comment.id} className="comment-item">
                <p className="comment-text">
                  {comment.text}
                  {comment.isBold && (
                    <>
                      <br />
                      <strong>{comment.author}</strong>
                    </>
                  )}
                </p>
            
              </div>
            ))}
          </div>
     
        </div>
      </div>
    </div>
  );
};

const AddCommentModal: React.FC<AddCommentModalProps> = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  teacherName 
}) => {
  const [comment, setComment] = useState<string>("");
  const maxChars = 500;

  const handleSubmit = () => {
    if (comment.trim().length === 0) return;
    
    onSubmit(comment);
    setComment("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Comente sobre {teacherName}</h2>
         
        </div>
        
        <div className="modal-body">
          <div className="comment-form">
            <h3>Comente!</h3>
            <p>Não se preocupe, todos os comentários são anônimos, seu nome não será revelado</p>
            
            <div className="divider"></div>
            
            
            <div className="textarea-container">
              <textarea
                className="comment-textarea"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Digite seu comentário aqui..."
                maxLength={maxChars}
              />
              <div className={`char-counter ${comment.length >= maxChars ? 'limit' : ''}`}>
                {comment.length}/{maxChars}
              </div>
            </div>
            
            <div className="form-actions">
              <button className="cancel-button" onClick={onClose}>
                Cancelar
              </button>
              <button 
                className="submit-button" 
                onClick={handleSubmit}
                disabled={comment.trim().length === 0}
              >
                Comentar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeacherCard: React.FC<TeacherCardProps> = ({ 
  teacherName = "Teacher name", 
  recommendations = 12,
  isInitiallyFavorite = false 
}) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(isInitiallyFavorite);
  const [showViewCommentsModal, setShowViewCommentsModal] = useState<boolean>(false);
  const [showAddCommentModal, setShowAddCommentModal] = useState<boolean>(false);

  const toggleFavorite = (): void => {
    setIsFavorite(!isFavorite);
    console.log(`Professor ${teacherName} foi ${!isFavorite ? 'favoritado' : 'desfavoritado'}`);
  };

  const handleViewComments = (): void => {
    setShowViewCommentsModal(true);
  };

  const handleAddComment = (): void => {
    setShowAddCommentModal(true);
  };

  const handleSubmitComment = (commentText: string): void => {
    console.log(`Novo comentário para ${teacherName}:`, commentText);
  };

  return (
    <>
      <div id="teacher-card">
        <div id="title-row">
          <h3>{teacherName}</h3>
          <div 
            className={`favorite-icon ${isFavorite ? 'filled' : 'outlined'}`}
            onClick={toggleFavorite}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && toggleFavorite()}
          >
            {isFavorite ? <FavoriteFilledIcon /> : <FavoriteOutlinedIcon />}
          </div>
        </div>
        
        <p>{recommendations} {recommendations === 1 ? 'pessoa recomenda' : 'pessoas recomendam'} esse professor</p>
        
        <div id="teacher-details">
          <button onClick={handleViewComments}>
            Ver comentários
          </button>
          <button onClick={handleAddComment}>
            Comentar
          </button>
        </div>
      </div>

      <ViewCommentsModal
        isOpen={showViewCommentsModal}
        onClose={() => setShowViewCommentsModal(false)}
        teacherName={teacherName}
      />

      <AddCommentModal
        isOpen={showAddCommentModal}
        onClose={() => setShowAddCommentModal(false)}
        onSubmit={handleSubmitComment}
        teacherName={teacherName}
      />
    </>
  );
};

export default TeacherCard;