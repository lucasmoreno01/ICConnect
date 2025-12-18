package com.example.icConnect.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import java.time.LocalDateTime;

@Entity
@Table(name = "events")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Size(max = 600)
    private String description;

    @JsonProperty("start")
    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime eventStart;

    @JsonProperty("end")
    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime eventEnd;

    private String eventUrl;

    public Event() {}

    public Event(String name, String description, LocalDateTime eventStart, LocalDateTime eventEnd, String eventUrl) {
        this.name = name;
        this.description = description;
        this.eventStart = eventStart;
        this.eventEnd = eventEnd;
        this.eventUrl = eventUrl;
    }

    public Long getId() { return id; }
    public String getName() { return name; }
    public String getDescription() { return description; }
    public LocalDateTime getEventStart() { return eventStart; }
    public LocalDateTime getEventEnd() { return eventEnd; }
    public String getEventUrl() { return eventUrl; }

    public void setName(String name) { this.name = name; }
    public void setDescription(String description) { this.description = description; }
    public void setEventStart(LocalDateTime eventStart) { this.eventStart = eventStart; }
    public void setEventEnd(LocalDateTime eventEnd) { this.eventEnd = eventEnd; }
    public void setEventUrl(String eventUrl) { this.eventUrl = eventUrl; }
}
