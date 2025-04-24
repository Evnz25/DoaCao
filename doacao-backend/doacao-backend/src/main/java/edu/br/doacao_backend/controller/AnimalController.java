package edu.br.doacao_backend.controller;

import edu.br.doacao_backend.model.Animal;
import edu.br.doacao_backend.model.MedicalCondition;
import edu.br.doacao_backend.repository.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
public class AnimalController {

    @Autowired
    private AnimalRepository animalRepository;

    @PostMapping("/animal")
    public ResponseEntity<Animal> createAnimal(
        @RequestPart("basic_info") String basicInfoJson,
        @RequestPart("medical_conditions") String medicalConditionsJson,    
        @RequestPart("imagePath") MultipartFile imagePath
    ) throws JsonProcessingException {
        ObjectMappper mapper = new ObjectMapper(); 

        Animal animal = mapper.readValue(basicInfoJson, Animal.class);
        MedicalCondition cond = mapper.readValue(medicalConditionsJson, MedicalCondition.class);

        animal.setMedical_conditions(cond);

        String path = imageService.save(imagePath);
        animal.setImagePath(path);

        Animal savedAnimal = animalRepository.save(animal);

        return ResponseEntity.ok(savedAnimal);
    }

    Animal newAnimal(@RequestBody Animal newAnimal) { return animalRepository.save(newAnimal); }

    @GetMapping("/animals")
    List<Animal> getAllAnimals() { return animalRepository.findAll(); }

    @GetMapping("/animals/{id}")
    public Animal getAnimal(@PathVariable Long id) {
        return animalRepository.findById(id)
                .orElseThrow(()-> new RuntimeException("Animal não encontrado"));
    }
}
