package edu.br.doacao_backend.model;


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

    @ManyToOne
    @JoinColumn(name = "id_employee", referencedColumnName = "id")
    private Employee employee;

    @ManyToOne
    @JoinColumn(name = "id_client", referencedColumnName = "id")
    private Client client;

    @ManyToOne
    @JoinColumn(name = "id_Animal", referencedColumnName = "id")
    private Animal animal;
}
