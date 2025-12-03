package com.example.icConnect.model;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;
import jakarta.persistence.CascadeType;

import org.hibernate.annotations.ManyToAny;

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

    @OneToMany(mappedBy = "materia", cascade = CascadeType.ALL, fetch = jakarta.persistence.FetchType.LAZY)
    private List<MateriaCurso> cursos;


    @ManyToMany
    @JoinTable(
        name = "Materia_Professor",
        joinColumns = @jakarta.persistence.JoinColumn(name = "materia_id"),
        inverseJoinColumns = @jakarta.persistence.JoinColumn(name = "professor_id")
    )
    private List<Professor> professores;

    @OneToMany(mappedBy = "materia")
    private List<Arquivo> arquivos;


    
    
}
