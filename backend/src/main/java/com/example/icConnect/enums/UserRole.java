package com.example.icConnect.enums;

public enum UserRole {
    ADMIN("Admin"),

    STUDENT("Aluno");
    
    private String role;

    UserRole(String role) {
        this.role = role;
    }
    
    public String GetRole() {
        return role;
    }
}
