package com.example.icConnect.config;

import org.springframework.stereotype.Component;

import java.nio.file.Files;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.beans.factory.annotation.Value;
import java.nio.file.Path;
import java.util.List;
import com.example.icConnect.model.Materia;
import com.example.icConnect.repository.CourseRepository;

@Component
public class EstruturaPastasInitializer implements ApplicationRunner {

    @Value("${app.upload-dir}")
    private String baseDir;

    @Autowired
    private CourseRepository courseRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {

        Path raiz = Paths.get(baseDir);
        Files.createDirectories(raiz);

        List<Materia> materias = courseRepository.findAll();

        for (Materia m : materias) {
            Path path = raiz.resolve("materia-" + m.getId());
            Files.createDirectories(path);
            System.out.println("Pasta criada/validada: " + path);
        }
    }
    
}
