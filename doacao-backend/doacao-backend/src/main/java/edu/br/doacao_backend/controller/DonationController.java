package edu.br.doacao_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import edu.br.doacao_backend.model.Donation;
import edu.br.doacao_backend.repository.DonationRepository;

@CrossOrigin("http://localhost:5173")
@RestController
public class DonationController {
    
    @Autowired
    private DonationRepository donationRepository;

    @GetMapping("/donations")
    public List<Donation> getAllDonation(){
        return donationRepository.findAll();
    }

    @GetMapping("/donations/{id}")
    public Donation getDonationById(@PathVariable Long id){
        return donationRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Doação não encontrada com o id: " + id));
    }

}
