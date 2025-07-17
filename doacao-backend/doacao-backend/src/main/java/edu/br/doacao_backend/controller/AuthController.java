package edu.br.doacao_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import edu.br.doacao_backend.dto.LoginRequestDto;
import edu.br.doacao_backend.model.Employee;
import edu.br.doacao_backend.service.AuthService;
import javax.security.auth.login.FailedLoginException;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("/api/auth") 
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestDto loginDto) {
        try {
            Employee authenticatedEmployee = authService.login(loginDto);
            return ResponseEntity.ok(authenticatedEmployee);
        } catch (FailedLoginException e) {
            return ResponseEntity.status(401).body(e.getMessage());
        }
    }
}