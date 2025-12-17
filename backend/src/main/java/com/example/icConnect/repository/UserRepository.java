package com.example.icConnect.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.icConnect.model.Aluno;

public interface UserRepository extends JpaRepository<Aluno, Long> {

    boolean existsByMatricula(String matricula);

    boolean existsByEmail(String email);   

    Optional<Aluno> findByEmail(String email);

}
