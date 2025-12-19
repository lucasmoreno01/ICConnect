import { useState } from "react";
import Header from "../../components/Header/Header";
import AppCard from "../../components/AppCard";
import { useEvents } from "../../hooks/useEvents";
import "./Styles.css";

export default function Events() {
  const { events, loading, error, createEvent } = useEvents();

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");

  function formatDate(dateStr?: string) {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return `${date.getUTCDate()}/${date.getUTCMonth() + 1}`;
  }

  async function handleSave() {
    if (!title.trim() || !startDate.trim()) return;

    await createEvent({
      name: title,
      start: startDate,
      end: endDate,
      description: content,
      eventUrl: url,
    });

    setTitle("");
    setStartDate("");
    setEndDate("");
    setContent("");
    setUrl("");
    setShowCreateModal(false);
  }

  return (
    <>
      <Header />

      {showCreateModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowCreateModal(false)}
        >
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
              <button
                className="btn-cancel"
                onClick={() => setShowCreateModal(false)}
              >
                Cancelar
              </button>
              <button className="btn-send" onClick={handleSave}>
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}

      {redirectUrl && (
        <div className="modal-overlay" onClick={() => setRedirectUrl(null)}>
          <div
            className="modal-content redirect-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Redirecionamento Externo</h3>
            <p>Você será redirecionado para:</p>

            <div className="url-display">{redirectUrl}</div>

            <div className="modal-actions centered">
              <button
                className="btn-cancel"
                onClick={() => setRedirectUrl(null)}
              >
                Cancelar
              </button>
              <button
                className="btn-send"
                onClick={() => {
                  window.open(redirectUrl, "_blank");
                  setRedirectUrl(null);
                }}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}

      <main id="events">
        <div className="events-header-row">
          <h1>Eventos</h1>
          <button
            className="btn-create"
            onClick={() => setShowCreateModal(true)}
          >
            Postar Evento
          </button>
        </div>

        {loading && <p style={{ padding: "0 24px" }}>Carregando eventos...</p>}
        {error && <p style={{ padding: "0 24px" }}>{error}</p>}

        <div className="event-cards">
          {events.map((event) => (
            <div
              key={event.id}
              className="card-wrapper"
              onClick={() => {
                if (event.eventUrl) {
                  setRedirectUrl(event.eventUrl);
                } else {
                  alert("Este evento não possui link externo cadastrado.");
                }
              }}
            >
              <AppCard
                title={event.name}
                start={formatDate(event.start)}
                end={formatDate(event.end)}
                content={event.description}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
