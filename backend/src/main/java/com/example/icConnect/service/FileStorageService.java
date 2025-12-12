package com.example.icConnect.service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Value;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Service
public class FileStorageService {
    
     @Value("${app.upload-dir}")
    private String baseUploadDir;

    public String salvarArquivo(MultipartFile file, Long materiaId) throws IOException {
       
        String materiaDir = baseUploadDir + "/materia-" + materiaId;

        Path destinoMateria = Paths.get(materiaDir);

        if (!Files.exists(destinoMateria)) {
            Files.createDirectories(destinoMateria);
        }
        
        String nomeSalvo = System.currentTimeMillis() + "_" + file.getOriginalFilename();

        Path destinoArquivo = destinoMateria.resolve(nomeSalvo);

        Files.copy(file.getInputStream(), destinoArquivo, StandardCopyOption.REPLACE_EXISTING);

        return "/materia-" + materiaId + "/" + nomeSalvo;
    }
}
