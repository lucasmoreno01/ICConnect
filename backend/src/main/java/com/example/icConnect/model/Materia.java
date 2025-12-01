package com.example.icConnect.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;

@Entity
@Table(name = "Materia")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Materia {

    @jakarta.persistence.Id
    @jakarta.persistence.GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private Long id;

    private String nome;

    private String codigo;

    private String semestre;

    private List<Professor> professores;

    
    
}
