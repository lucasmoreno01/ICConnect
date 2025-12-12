package com.example.icConnect.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.icConnect.model.Arquivo;


public interface ArquivoRepository extends JpaRepository<Arquivo, Long> {
    
}
