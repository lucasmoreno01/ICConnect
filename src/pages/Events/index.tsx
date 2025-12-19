import AppCard from "../../components/AppCard";
import Header from "../../components/Header/Header";
import { useEvents } from "../../hooks/useEvents";
import "./Styles.css";

export default function Events() {
  const { events, loading, error } = useEvents();

  return (
    <>
      <Header />

      <main id="events">
        <h1>Eventos</h1>

        {loading && <p className="info-message">Carregando eventos...</p>}
        {error && <p className="error-message">{error}</p>}

        <div className="event-cards">
          {events.map((event) => (
            <AppCard
              key={event.id}
              title={event.name}
              start={new Date(event.start).toLocaleDateString()}
              end={new Date(event.end).toLocaleDateString()}
              eventUrl={event.eventUrl}
              content={event.description}
            />
          ))}
        </div>
      </main>
    </>
  );
}
