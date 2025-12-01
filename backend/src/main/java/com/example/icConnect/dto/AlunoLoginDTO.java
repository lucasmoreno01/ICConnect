package com.example.icConnect.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;

public record AlunoLoginDTO(@Email @NotEmpty(message = "Obrigatório e-mail") String email,
                            @NotEmpty(message = "Obrigatório senha") String password) {
    
}
