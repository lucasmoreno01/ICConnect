package com.example.icConnect.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import com.example.icConnect.model.Aluno;

public interface UserRepository extends JpaRepository<Aluno, Long> {

    boolean existsByMatricula(String matricula);

    boolean existsByEmail(String email);   

    UserDetails findByEmail(String email);

}
