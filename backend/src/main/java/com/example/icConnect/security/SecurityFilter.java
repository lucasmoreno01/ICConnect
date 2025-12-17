package com.example.icConnect.security;

import java.io.IOException;


import org.apache.logging.log4j.util.Strings;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.example.icConnect.model.Aluno;
import com.example.icConnect.repository.UserRepository;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;

@Component
public class SecurityFilter extends OncePerRequestFilter {

    private final TokenConfig tokenConfig;
    private final UserRepository alunoRepository;

    public SecurityFilter(TokenConfig tokenConfig, UserRepository alunoRepository) {
        this.tokenConfig = tokenConfig;
        this.alunoRepository = alunoRepository;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain)
            throws ServletException, IOException {

        String path = request.getRequestURI();

        if (path.startsWith("/auth")) {
            filterChain.doFilter(request, response);
            return;
        }

        String authorizationHeader = request.getHeader("Authorization");

        if (Strings.isNotEmpty(authorizationHeader) &&
            authorizationHeader.startsWith("Bearer ")) {

            String token = authorizationHeader.substring(7);

            tokenConfig.validadeToken(token).ifPresent(jwtUser -> {

                Aluno aluno = alunoRepository
                        .findByEmail(jwtUser.email())
                        .orElseThrow(() -> new RuntimeException("Aluno não encontrado"));

                UsernamePasswordAuthenticationToken authentication =
                        new UsernamePasswordAuthenticationToken(
                                aluno,               // ← AGORA É ALUNO
                                null,
                                aluno.getAuthorities()
                        );

                SecurityContextHolder
                        .getContext()
                        .setAuthentication(authentication);
            });
        }

        filterChain.doFilter(request, response);
    }
}
