package edu.br.doacao_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import edu.br.doacao_backend.model.Address;
import edu.br.doacao_backend.model.Employee;
import edu.br.doacao_backend.repository.EmployeeRepository;

@CrossOrigin("http://localhost:5173")
@RestController
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @PostMapping("/employee")
    public ResponseEntity<Employee> createEmployee(
        @RequestPart("basic_info_employee") String basicInfoEmployeeJson,
        @RequestPart("address_employee") String addressEmployeeJson
    ) throws JsonProcessingException {
        try {
            ObjectMapper mapper = new ObjectMapper();

            Employee employee = mapper.readValue(basicInfoEmployeeJson, Employee.class);
            Address addressEmployee  = mapper.readValue(addressEmployeeJson, Address.class);

            employee.setAddress(addressEmployee);

            Employee savedEmployee = employeeRepository.save(employee);

            return ResponseEntity.ok(savedEmployee);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    @GetMapping("/employees")
    List<Employee> getAllClient() { return employeeRepository.findAll(); }

    @GetMapping("/employees/{id}")
    public Employee getEmployee(@PathVariable Long id) {
        return employeeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Funcionário não encontrado"));
    }
    
}
