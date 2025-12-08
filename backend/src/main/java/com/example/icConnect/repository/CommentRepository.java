package com.example.icConnect.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.icConnect.model.Comentario;

import java.util.List;


public interface CommentRepository extends JpaRepository<
Comentario, Long> {

    List<Comentario> findByMateriaAndProfessor(Long materia, Long professor);

}