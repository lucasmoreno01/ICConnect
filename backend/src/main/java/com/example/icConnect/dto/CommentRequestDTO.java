package com.example.icConnect.dto;



public record CommentRequestDTO(
    String texto,
    Long materia_id,
    Long professor_id
) {}