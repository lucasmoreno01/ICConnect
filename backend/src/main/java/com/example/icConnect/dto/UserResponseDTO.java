package com.example.icConnect.dto;

public record UserResponseDTO(
        Long id,
        String email,
        String name,
        String matricula
) {}