package com.example.icConnect.security;

import lombok.Builder;

@Builder
public record JWTUserData(Long id, String email) {
    
}
