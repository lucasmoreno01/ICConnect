package com.example.icConnect.controller;

import com.example.icConnect.dto.EventRequestDTO;
import com.example.icConnect.model.Event;
import com.example.icConnect.repository.EventRepository;
import com.sun.jdi.request.EventRequest;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/events")
public class EventController {

    private final EventRepository eventRepository;

    public EventController(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    @GetMapping
    public ResponseEntity<List<Event>> getAllEvents() {
        return ResponseEntity.ok(eventRepository.findAll());
    }

    @PostMapping
    public ResponseEntity<Event> createEvent(@Valid @RequestBody EventRequestDTO request) {
        Event event = new Event(
                request.name(),
                request.description(),
                request.eventStart(),
                request.eventEnd(),
                request.eventUrl()
        );
        Event saved = eventRepository.save(event);
        return ResponseEntity.ok(saved);
    }
}
