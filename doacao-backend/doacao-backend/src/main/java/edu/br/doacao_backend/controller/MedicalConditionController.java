package edu.br.doacao_backend.controller;

import edu.br.doacao_backend.model.MedicalCondition;
import edu.br.doacao_backend.repository.MedicalConditionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
public class MedicalConditionController {

    @Autowired
    private MedicalConditionRepository medicalConditionRepository;

    @PostMapping("/medicalcondition")
    MedicalCondition newMedicalCondition(@RequestBody MedicalCondition newMedicalCondtion) { return medicalConditionRepository.save(newMedicalCondtion); }

    @GetMapping("/medicalconditions")
    List<MedicalCondition> getAllMedicalCondtion() { return medicalConditionRepository.findAll(); }

    }
