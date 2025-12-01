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

    private final String secret = "8a81e4c2f9fe3cbe4c55732ba6dbaace12fca92f8b73364eea96bc91";

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
