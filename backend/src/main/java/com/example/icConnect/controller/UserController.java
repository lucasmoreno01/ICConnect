package com.example.icConnect.controller;

import com.example.icConnect.dto.UserResponseDTO;
import com.example.icConnect.model.Aluno;
import com.example.icConnect.repository.UserRepository;
import com.example.icConnect.security.TokenConfig;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserRepository userRepository;
    private final TokenConfig tokenConfig;

    public UserController(UserRepository userRepository, TokenConfig tokenConfig) {
        this.userRepository = userRepository;
        this.tokenConfig = tokenConfig;
    }

    @GetMapping("/me")
    public ResponseEntity<UserResponseDTO> getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null || !authentication.isAuthenticated()) {
            return ResponseEntity.status(401).build();
        }


        Aluno aluno = (Aluno) authentication.getPrincipal();

        UserResponseDTO userDTO = new UserResponseDTO(
                aluno.getId(),
                aluno.getEmail(),
                aluno.getName(),
                aluno.getMatricula()
        );

        return ResponseEntity.ok(userDTO);
    }

}