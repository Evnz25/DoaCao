package edu.br.doacao_backend.controller;

import edu.br.doacao_backend.model.Address;
import edu.br.doacao_backend.repository.AddressRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
public class AddressController {

    @Autowired
    private AddressRepository addressRepository;

    @PostMapping("/address")
    Address newAdress (@RequestBody Address newAdress) { return addressRepository.save(newAdress); }
    
    @GetMapping("/address")
    List<Address> getAllAddress() { return addressRepository.findAll(); }
}
