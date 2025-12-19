import { useState } from "react";
import AppCard from "../../components/AppCard";
import Header from "../../components/Header/Header";
import "./Styles.css";

export default function Events() {
  type CardType = {
    title: string;
    label: string;
    content: string;
    url: string;
  };

  const [cards, setCards] = useState<CardType[]>([]);

  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

  function addCard() {
    if (!title.trim() || !startDate.trim()) return;

    const dateLabel = endDate 
      ? `${formatDate(startDate)} - ${formatDate(endDate)}` 
      : formatDate(startDate);

    setCards((prev) => [...prev, { title, label: dateLabel, content, url }]);
    resetForm();
  }

  function formatDate(dateStr: string) {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return `${date.getUTCDate()}/${date.getUTCMonth() + 1}`;
  }

  function resetForm() {
    setTitle("");
    setStartDate("");
    setEndDate("");
    setContent("");
    setUrl("");
  }

  function handleSave() {
    addCard();
    setShowCreateModal(false);
  }

  function handleCloseCreate() {
    setShowCreateModal(false);
    resetForm();
  }

  function handleCardClick(targetUrl: string) {
    if (targetUrl && targetUrl.trim() !== "") {
      setRedirectUrl(targetUrl);
    } else {
      alert("Este evento não possui um link externo cadastrado.");
    }
  }

  function handleConfirmRedirect() {
    if (redirectUrl) {
      window.open(redirectUrl, "_blank");
      setRedirectUrl(null);
    }
  }

  return (
    <>
      <Header />

      {showCreateModal && (
        <div className="modal-overlay" onClick={handleCloseCreate}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Novo Evento</h2>

            <div className="form-group">
              <input
                placeholder="Nome do Evento"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <div className="date-row">
                <div className="date-wrapper">
                  <label>Data de Início</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="input-date"
                  />
                </div>

                <div className="date-wrapper">
                  <label>Data de Fim</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="input-date"
                  />
                </div>
              </div>

              <textarea
                placeholder="Descrição"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="input-textarea"
                rows={4}
              />

              <input
                placeholder="URL do Evento"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>

            <div className="modal-actions">
              <button onClick={handleCloseCreate} className="btn-cancel">
                Cancelar
              </button>
              <button onClick={handleSave} className="btn-send">
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}

      {redirectUrl && (
        <div className="modal-overlay" onClick={() => setRedirectUrl(null)}>
          <div className="modal-content redirect-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Redirecionamento Externo</h3>
            <p>Você será redirecionado para a página do evento:</p>

            <div className="url-display">
              {redirectUrl}
            </div>

            <div className="modal-actions centered">
              <button onClick={() => setRedirectUrl(null)} className="btn-cancel">
                Recusar
              </button>
              <button onClick={handleConfirmRedirect} className="btn-send">
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}

      <main id="events">
        <div className="events-header-row">
          <h1>Eventos</h1>
          <button onClick={() => setShowCreateModal(true)} className="btn-create">
            Postar Evento
          </button>
        </div>

        <div className="event-cards">
          <div className="card-wrapper" onClick={() => handleCardClick("https://google.com")}>
            <AppCard title="SIMTECH" label="07/12 - 11/12" content="Clique para testar!" />
          </div>

          {cards.map((c, i) => (
            <div key={i} className="card-wrapper" onClick={() => handleCardClick(c.url)}>
              <AppCard title={c.title} label={c.label} content={c.content} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}