package com.example.icConnect.dto;
import java.time.Instant;

public record LoginResponseDTO(
    String Token,
    Long id,
    String email,
    String name,
    String role,
    String matricula,
    Instant expiresAt
) {}
