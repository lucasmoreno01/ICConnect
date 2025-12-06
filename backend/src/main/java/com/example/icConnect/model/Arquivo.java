package com.example.icConnect.model;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

import org.hibernate.annotations.ManyToAny;

@Entity
@Table(name = "Arquivo")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Arquivo {
    @jakarta.persistence.Id
    @jakarta.persistence.GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private long id;

    private String nome;

    private String tipo;

    private String url;

    private LocalDateTime dataUpload;

    @ManyToOne
    @JoinColumn(name = "materia_id")
    private Materia materia;

    @OneToOne
    private Aluno enviadoPor;
    
}
