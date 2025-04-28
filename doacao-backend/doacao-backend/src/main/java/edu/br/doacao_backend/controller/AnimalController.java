package edu.br.doacao_backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import edu.br.doacao_backend.model.Animal;
import edu.br.doacao_backend.model.MedicalCondition;
import edu.br.doacao_backend.repository.AnimalRepository;
import edu.br.doacao_backend.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
public class AnimalController {

    @Autowired
    private ImageService imageService;
    @Autowired
    private AnimalRepository animalRepository;

    @PostMapping("/animal")
    public ResponseEntity<Animal> createAnimal(
        @RequestPart("basic_info") String basicInfoJson,
        @RequestPart("medical_conditions") String medicalConditionsJson,    
        @RequestPart("imagePath") MultipartFile imagePath
    ) throws JsonProcessingException {
        try {
            ObjectMapper mapper = new ObjectMapper();

            Animal animal = mapper.readValue(basicInfoJson, Animal.class);
            MedicalCondition cond = mapper.readValue(medicalConditionsJson, MedicalCondition.class);

            animal.setMedical_conditions(cond);

            String path = imageService.save(imagePath);
            animal.setImagePath(path);

            Animal savedAnimal = animalRepository.save(animal);

            return ResponseEntity.ok(savedAnimal);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/animals")
    List<Animal> getAllAnimals() { return animalRepository.findAll(); }

    @GetMapping("/animals/{id}")
    public Animal getAnimal(@PathVariable Long id) {
        return animalRepository.findById(id)
                .orElseThrow(()-> new RuntimeException("Animal não encontrado"));
    }
}
