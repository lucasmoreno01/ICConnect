package com.example.icConnect.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.icConnect.model.Materia;


public interface CourseRepository extends JpaRepository<
Materia, Long> {}