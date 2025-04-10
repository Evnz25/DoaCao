package edu.br.doacao_backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "medical_conditions")
@Getter
@Setter
public class MedicalCondition {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    private String injuries;

    private String sickness;

    private String medicine;

    private String vaccine;

    private String castrated;

    @OneToOne(mappedBy = "medical_conditions")
    private Animal animal;
}
