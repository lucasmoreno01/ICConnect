package com.example.icConnect.dto;
import java.time.LocalDateTime;

import com.example.icConnect.model.Arquivo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ArquivoDTO {
    private Long id;
    private String nome;
    private String tipo;
    private LocalDateTime dataUpload;


    private String downloadUrl;


    private Long materiaId;
    private Long enviadoPorId;
    
}
