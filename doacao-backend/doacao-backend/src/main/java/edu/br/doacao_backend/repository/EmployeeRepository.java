package edu.br.doacao_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

import edu.br.doacao_backend.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Optional<Employee> findByEmail(String email);
}
