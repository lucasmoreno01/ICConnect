package com.example.icConnect.dto;

import java.util.List;

import com.example.icConnect.model.Professor;


public record CourseResponseDTO(
    Long id,
    String nome,
    String codigo,
    List <Professor> professores
) {}