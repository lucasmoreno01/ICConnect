package com.example.icConnect.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;

public record AlunoRegisterDTO(@Email @NotEmpty String email,
                                      @NotEmpty String password,
                                      @NotEmpty String matricula, String nome) {
    
}
