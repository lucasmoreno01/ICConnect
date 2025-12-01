package com.example.icConnect.security;

import org.springframework.stereotype.Component;

import com.auth0.jwt.JWT;
import com.example.icConnect.model.Aluno;
import java.time.Instant;
import java.util.Optional;

import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;

@Component
public class TokenConfig {

    private final String secret = "secret";

    Algorithm algorithm = Algorithm.HMAC256(secret);

    public String generateToken(Aluno aluno) {
        return JWT.create()
            .withClaim("id", aluno.getId())
            .withSubject(aluno.getEmail())
            .withExpiresAt(Instant.now().plusSeconds(86400))
            .withIssuedAt(Instant.now())
            .sign(algorithm);
           
    }

    public Optional<JWTUserData> validadeToken(String token) { 
        try{
            Algorithm algorithm = Algorithm.HMAC256(secret);
            DecodedJWT decodedJWT = JWT.require(algorithm).build().verify(token);
            return Optional.of(
                JWTUserData.builder()
                    .id(decodedJWT.getClaim("id").asLong())
                    .email(decodedJWT.getSubject())
                    .build()
            );
        }
        catch(JWTVerificationException e){
            return Optional.empty();
        }
    }
}
