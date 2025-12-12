package com.example.icConnect.controller;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.icConnect.repository.ArquivoRepository;
import com.example.icConnect.repository.CourseRepository;
import com.example.icConnect.repository.UserRepository;
import com.example.icConnect.service.FileStorageService;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.multipart.MultipartFile;

import com.example.icConnect.model.Arquivo;


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
    


    @PostMapping("/upload/{materiaId}/{alunoId}")
    public ResponseEntity<?> upload(@PathVariable Long materiaId, @PathVariable Long alunoId, @RequestBody MultipartFile file) {

        try {
            String relativePath = fileStorageService.salvarArquivo(file, materiaId);

            Arquivo arquivo = new Arquivo();
            arquivo.setNome(file.getOriginalFilename());
            arquivo.setTipo(file.getContentType());
            arquivo.setUrl(relativePath);
            arquivo.setDataUpload(LocalDateTime.now());
            
            arquivo.setMateria(courseRepository.findById(materiaId).get());
            arquivo.setEnviadoPor(alunoRepository.findById(alunoId).get());

            arquivoRepository.save(arquivo);

            return ResponseEntity.ok("Arquivo enviado com sucesso: ");
        }

        catch (Exception e) {
            return ResponseEntity.status(500).body("Erro ao enviar arquivo: " + e.getMessage());
        }
        
    }
    
}
