package edu.br.doacao_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import edu.br.doacao_backend.model.Employee;
import edu.br.doacao_backend.repository.EmployeeRepository;

@Service
public class EmployeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Employee createEmployee(Employee employee) {
        String rawPassword = employee.getPassword();

        String hashedPassword = passwordEncoder.encode(rawPassword);

        employee.setPassword(hashedPassword);
        return employeeRepository.save(employee);
    }
}
