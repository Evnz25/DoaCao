package edu.br.doacao_backend.service;

import edu.br.doacao_backend.model.Address;
import edu.br.doacao_backend.model.Animal;
import edu.br.doacao_backend.model.Client;
import edu.br.doacao_backend.model.Donation;
import edu.br.doacao_backend.repository.AnimalRepository;
import edu.br.doacao_backend.repository.ClientRepository;
import edu.br.doacao_backend.repository.DonationRepository;
import jakarta.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.time.LocalDate;
import java.util.List;

@Service
public class DonationService {

    @Autowired
    private ObjectMapper mapper;

    @Autowired
    private DonationRepository donationRepository;

    @Autowired
    private ClientRepository clientRepository; 

    @Autowired
    private AnimalRepository animalRepository; 


    public List<Donation> findPendingDonations() {
        return donationRepository.findByStatus("PENDENTE");
    }

    public Donation createDonationWithNewClient(String clientJson, String addressJson, String animalIdStr) throws Exception {
        
        Client clientData = mapper.readValue(clientJson, Client.class);
        Address addressData = mapper.readValue(addressJson, Address.class);

        clientData.setAddress(addressData);
        
        Client savedClient = clientRepository.save(clientData);

        Long animalId = Long.parseLong(animalIdStr);
        Animal animal = animalRepository.findById(animalId)
                .orElseThrow(() -> new EntityNotFoundException("Animal não encontrado com o ID: " + animalId));

        Donation newDonation = new Donation();
        newDonation.setClient(savedClient);
        newDonation.setAnimal(animal);
        newDonation.setStatus("PENDENTE");
        newDonation.setData(LocalDate.now().toString());

        return donationRepository.save(newDonation);
    }
}
