package com.example.icConnect.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.icConnect.model.Arquivo;

public interface ArquivoRepository extends JpaRepository<Arquivo, Long> {

    List<Arquivo> findByMateriaId(Long materiaId);

    
}
