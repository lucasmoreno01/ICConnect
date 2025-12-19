import { api } from "../services/apiService";

export interface EventDTO {
  id?: number;
  name: string;
  description: string;
  start: string;
  end: string;
  eventUrl: string;
}

export class EventController {
  static getAll() {
    return api.get<EventDTO[]>("/events");
  }

  static create(data: EventDTO) {
    return api.post<EventDTO>("/events", data);
  }
}
