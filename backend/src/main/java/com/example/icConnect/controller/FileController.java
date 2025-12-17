package com.example.icConnect.controller;

import java.io.IOException;
import java.time.LocalDateTime;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.icConnect.repository.ArquivoRepository;
import com.example.icConnect.repository.CourseRepository;
import com.example.icConnect.repository.UserRepository;
import com.example.icConnect.service.FileStorageService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;


import org.springframework.web.multipart.MultipartFile;
import org.springframework.security.core.context.SecurityContextHolder;

import com.example.icConnect.dto.ArquivoDTO;
import com.example.icConnect.model.Aluno;
import com.example.icConnect.model.Arquivo;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;


@RestController
@RequestMapping("/arquivos")
public class FileController {

    @Autowired
    private FileStorageService fileStorageService;

    @Autowired
    private ArquivoRepository arquivoRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private UserRepository alunoRepository;
    


    @PostMapping("/upload/{materiaId}")
    public ResponseEntity<?> upload(
            @PathVariable Long materiaId,
            @RequestParam("file") MultipartFile file) {

        try {

        
            Aluno aluno = (Aluno) SecurityContextHolder
                    .getContext()
                    .getAuthentication()
                    .getPrincipal();

            var materia = courseRepository.findById(materiaId)
                    .orElseThrow(() -> new RuntimeException("Matéria não encontrada"));

        
            String relativePath = fileStorageService.salvarArquivo(file, materiaId);

        
            Arquivo arquivo = new Arquivo();
            arquivo.setNome(file.getOriginalFilename());
            arquivo.setTipo(file.getContentType());
            arquivo.setUrl(relativePath);
            arquivo.setDataUpload(LocalDateTime.now());
            arquivo.setMateria(materia);
            arquivo.setEnviadoPor(aluno);

            arquivoRepository.save(arquivo);

            return ResponseEntity.ok("Arquivo enviado com sucesso");

        } catch (Exception e) {
            return ResponseEntity.status(500)
                    .body("Erro ao enviar arquivo: " + e.getMessage());
        }
}

    @GetMapping("/materia/{materiaId}")
    public ResponseEntity<?> listarArquivosPorMateria(
            @PathVariable Long materiaId
    ) {
        return ResponseEntity.ok(
            arquivoRepository.findByMateriaId(materiaId)
                .stream()
                .map(arquivo -> {
                    ArquivoDTO dto = new ArquivoDTO();
                    dto.setId(arquivo.getId());
                    dto.setNome(arquivo.getNome());
                    dto.setTipo(arquivo.getTipo());
                    dto.setDataUpload(arquivo.getDataUpload());

                    dto.setMateriaId(arquivo.getMateria().getId());
                    dto.setEnviadoPorId(arquivo.getEnviadoPor().getId());

                    dto.setDownloadUrl("/arquivos/download/" + arquivo.getId());

                    return dto;
                })
                .toList()
        );
}


    @GetMapping("/download/{arquivoId}")
    public ResponseEntity<Resource> download(@PathVariable Long arquivoId)
        throws IOException {


        Arquivo arquivo = arquivoRepository.findById(arquivoId)
                .orElseThrow(() -> new RuntimeException("Arquivo não encontrado"));


        Path caminho = Paths.get(
                fileStorageService.getBaseUploadDir(),
                arquivo.getUrl()
        );

    Resource resource = new UrlResource(caminho.toUri());

    if (!resource.exists()) {
        throw new RuntimeException("Arquivo físico não encontrado");
    }

    return ResponseEntity.ok()
            .contentType(MediaType.APPLICATION_OCTET_STREAM)
            .header(
                HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=\"" + arquivo.getNome() + "\""
            )
            .body(resource);
}


}
