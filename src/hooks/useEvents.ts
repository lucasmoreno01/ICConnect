import { useState, useEffect } from "react";
import { EventController, type EventDTO } from "../api/controllers/eventController";

export function useEvents() {
  const [events, setEvents] = useState<EventDTO[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await EventController.getAll();
      setEvents(response);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "Erro ao buscar eventos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const createEvent = async (data: EventDTO) => {
    setLoading(true);
    setError(null);
    try {
      const response = await EventController.create(data);
      setEvents(prev => [...prev, response]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "Erro ao criar evento");
    } finally {
      setLoading(false);
    }
  };

  return { events, loading, error, fetchEvents, createEvent };
}
