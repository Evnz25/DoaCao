package edu.br.doacao_backend.controller;

import edu.br.doacao_backend.model.Client;
import edu.br.doacao_backend.repository.ClientRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
public class ClientController {

    @Autowired
    private ClientRepository clientRepository;

    @PostMapping("/client")
    Client newClient (@RequestBody Client newClient) { return clientRepository.save(newClient); }
    
    @GetMapping("/client")
    List<Client> getAllClient() { return clientRepository.findAll(); }
}