package edu.br.doacao_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import edu.br.doacao_backend.dto.LoginRequestDto;
import edu.br.doacao_backend.model.Employee;
import edu.br.doacao_backend.repository.EmployeeRepository;
import javax.security.auth.login.FailedLoginException;

@Service
public class AuthService {
    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Employee login(LoginRequestDto loginData) throws FailedLoginException {
        Employee employee = employeeRepository.findByEmail(loginData.getEmail())
                .orElseThrow(() -> new FailedLoginException("Credenciais inválidas."));

        boolean passwordMatches = passwordEncoder.matches(loginData.getPassword(), employee.getPassword());

        if (!passwordMatches) {
            throw new FailedLoginException("Credenciais inválidas.");
        }
        
        return employee;
    }
}
