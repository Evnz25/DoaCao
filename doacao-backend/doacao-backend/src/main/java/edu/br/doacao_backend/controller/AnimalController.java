package edu.br.doacao_backend.controller;

import edu.br.doacao_backend.model.Animal;
import edu.br.doacao_backend.repository.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
public class AnimalController {

    @Autowired
    private AnimalRepository animalRepository;

    @PostMapping("/animal")
    Animal newAnimal(@RequestBody Animal newAnimal) { return animalRepository.save(newAnimal); }

    @GetMapping("/animals")
    List<Animal> getAllAnimals() { return animalRepository.findAll(); }
}
