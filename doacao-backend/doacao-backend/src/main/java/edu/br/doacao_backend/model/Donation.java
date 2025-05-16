package edu.br.doacao_backend.model;

import java.util.List;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "donation")
@Getter
@Setter

public class Donation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private String data;

    private String status;

    @OneToMany
    @JoinColumn(name = "id_employee", referencedColumnName = "id")
    private List<Employee> employees;

    @OneToMany
    @JoinColumn(name = "id_client", referencedColumnName = "id")
    private List<Client> clients;

    @OneToMany
    @JoinColumn(name = "id_animal", referencedColumnName = "id")
    private List<Animal> animals;

}
