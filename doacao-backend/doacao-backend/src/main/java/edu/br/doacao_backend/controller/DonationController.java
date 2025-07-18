package edu.br.doacao_backend.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import edu.br.doacao_backend.model.Donation;
import edu.br.doacao_backend.repository.DonationRepository;
import edu.br.doacao_backend.service.DonationService;
import jakarta.persistence.EntityNotFoundException;

import org.springframework.security.core.annotation.AuthenticationPrincipal; 
import edu.br.doacao_backend.model.Employee;


@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("/api/donations") 
public class DonationController {
    
    @Autowired
    private DonationRepository donationRepository;

    @Autowired
    private DonationService donationService;

    @GetMapping("/all") 
    public List<Donation> getAllDonation(){
        return donationRepository.findAll();
    }

    @GetMapping("/{id}")
    public Donation getDonationById(@PathVariable Long id){
        return donationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Doação não encontrada com o id: " + id));
    }

    @GetMapping("/pending")
    public ResponseEntity<List<Donation>> getPendingDonations() {
        List<Donation> pendingDonations = donationService.findPendingDonations();
        return ResponseEntity.ok(pendingDonations);
    }

    @GetMapping("/available")
    public ResponseEntity<List<Donation>> getNullDonations() {
        List<Donation> nullDonations = donationService.findNullDonations();
        return ResponseEntity.ok(nullDonations);
    }

    @PostMapping("/initiate")
    public ResponseEntity<Donation> initiateDonation(
        @RequestPart("client_info") String clientJson,
        @RequestPart("address_info") String addressJson,
        @RequestPart("animalId") String animalIdStr
    ) {
        try {
            Donation newDonation = donationService.createDonationWithNewClient(clientJson, addressJson, animalIdStr);
            return new ResponseEntity<>(newDonation, HttpStatus.CREATED);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/{id}/approve")
    public ResponseEntity<Donation> approveDonation(
            @PathVariable Long id,
            @AuthenticationPrincipal Employee employee 
    ) {
        try {
            Donation approvedDonation = donationService.approveDonation(id, employee);
            return ResponseEntity.ok(approvedDonation);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
