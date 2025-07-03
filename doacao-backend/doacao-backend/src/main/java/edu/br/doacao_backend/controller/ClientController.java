package edu.br.doacao_backend.controller;

import edu.br.doacao_backend.model.Address;
import edu.br.doacao_backend.model.Client;
import edu.br.doacao_backend.repository.ClientRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
public class ClientController {

    @Autowired
    private ClientRepository clientRepository;

    @PostMapping("/client")
    public ResponseEntity<Client> createClient(
        @RequestPart("basic_info_client") String basicInfoClientJson,
        @RequestPart("address_client") String addressClientJson
    ) throws JsonProcessingException {
        try {
            ObjectMapper mapper = new ObjectMapper();

            Client client = mapper.readValue(basicInfoClientJson, Client.class);
            Address addressClient  = mapper.readValue(addressClientJson, Address.class);

            client.setAddress(addressClient);

            Client savedClient = clientRepository.save(client);

            return ResponseEntity.ok(savedClient);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    @GetMapping("/clients")
    List<Client> getAllClient() { return clientRepository.findAll(); }

    @GetMapping("/clients/{id}")
    public Client getClient(@PathVariable Long id) {
        return clientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado"));
    }
}