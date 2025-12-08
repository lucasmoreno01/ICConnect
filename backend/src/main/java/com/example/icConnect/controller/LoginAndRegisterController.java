

package com.example.icConnect.controller;

import com.example.icConnect.dto.AlunoRegisterDTO;
import com.example.icConnect.dto.AlunoLoginDTO;
import com.example.icConnect.dto.LoginResponseDTO;
import com.example.icConnect.dto.RegisterResponseDTO;

import com.example.icConnect.model.Aluno;
import com.example.icConnect.repository.UserRepository;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import com.example.icConnect.security.TokenConfig;
import java.time.Instant;

import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/auth")
public class LoginAndRegisterController {

    private final UserRepository alunoRepository;
    
    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;

    private final TokenConfig tokenConfig;

    public LoginAndRegisterController(UserRepository alunoRepository, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager, TokenConfig tokenConfig) {
        this.alunoRepository = alunoRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.tokenConfig = tokenConfig;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(@RequestBody @Valid AlunoLoginDTO aluno) {
        
        UsernamePasswordAuthenticationToken userAndPassword = new UsernamePasswordAuthenticationToken(aluno.email(), aluno.password());

        Authentication authentication = authenticationManager.authenticate(userAndPassword);

        Aluno loggedAluno = (Aluno) authentication.getPrincipal();
        String token = tokenConfig.generateToken(loggedAluno);
        Instant expiresAt = Instant.now().plusSeconds(86400);
        return ResponseEntity.ok(new LoginResponseDTO(token, 
            loggedAluno.getId(),
            loggedAluno.getEmail(),
            loggedAluno.getName(),
            loggedAluno.getRole().name(),
            loggedAluno.getMatricula(),
            expiresAt
        ));

    }

    @PostMapping("/register")
    public ResponseEntity<RegisterResponseDTO> register(@RequestBody @Valid AlunoRegisterDTO alunoDTO) {
        if (alunoRepository.existsByEmail(alunoDTO.email()) || alunoRepository.existsByMatricula(alunoDTO.matricula())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }

        Aluno newAluno = new Aluno();
        newAluno.setEmail(alunoDTO.email());
        newAluno.setMatricula(alunoDTO.matricula());
        newAluno.setName(alunoDTO.name()); 
        newAluno.setPassword(passwordEncoder.encode(alunoDTO.password()));
        alunoRepository.save(newAluno);

        RegisterResponseDTO registerResponseDTO = new RegisterResponseDTO(
            newAluno.getEmail(),
            newAluno.getMatricula(),
            newAluno.getName()
        );

        return ResponseEntity.status(HttpStatus.CREATED).body(registerResponseDTO);
    }
}