package com.example.icConnect.enums;

public enum UserRole {
    ADMIN("ADMIN"),

    STUDENT("ALUNO");

    private final String role;

    UserRole(String role) {
        this.role = role;
    }

    public String getRole() {
        return role;
    }

    
}
