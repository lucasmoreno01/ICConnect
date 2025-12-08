package com.example.icConnect.controller;

import com.example.icConnect.dto.CourseResponseDTO;
import com.example.icConnect.dto.CommentRequestDTO;
import com.example.icConnect.dto.CommentResponseDTO;
import com.example.icConnect.model.Materia;
import com.example.icConnect.model.Comentario;
import com.example.icConnect.model.Professor;
import com.example.icConnect.repository.CourseRepository;
import com.example.icConnect.repository.CommentRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/course")
public class CourseController{
    
    private final CourseRepository courseRepository;
    private final CommentRepository commentRepository;

    public CourseController(CourseRepository courseRepository, CommentRepository commentRepository) {
        
        this.courseRepository = courseRepository;
        this.commentRepository = commentRepository;
    }

    @GetMapping("/{id}")
    public ResponseEntity<CourseResponseDTO> buscarCurso(@PathVariable Long id) {

        Materia materia = courseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Matéria não encontrada"));

        CourseResponseDTO response = new CourseResponseDTO(
                materia.getId(),
                materia.getNome(),
                materia.getCodigo(),
                materia.getProfessores()
        );

        return ResponseEntity.ok(response);
    }

    @PostMapping("/{id}/comentarios")
    public ResponseEntity<Void> criarComentario(
        @PathVariable Long id, // ID da matéria
        @RequestBody CommentRequestDTO dto) {

    Comentario comentario = new Comentario();
    comentario.setTexto(dto.texto());
    comentario.setMateria(id);
    comentario.setProfessor(dto.professor_id());

    commentRepository.save(comentario);

    return ResponseEntity.status(HttpStatus.CREATED).build();

    }


    @GetMapping("/{id}/comentarios")
    public ResponseEntity<List<CommentResponseDTO>> listarComentarios(
        @PathVariable Long id,
        @RequestParam Long professor_id) {

    List<CommentResponseDTO> comentarios =
            commentRepository.findByMateriaAndProfessor(id, professor_id)
                    .stream()
                    .map(c -> new CommentResponseDTO(
                            c.getTexto()
                    ))
                    .toList();

    return ResponseEntity.ok(comentarios);
}


}