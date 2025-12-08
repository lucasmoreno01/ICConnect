package com.example.icConnect.model;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name = "Comentario")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Comentario {

    @jakarta.persistence.Id
    @jakarta.persistence.GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private Long id;

    private String texto;

    private Long materia;

    private Long professor;

}
