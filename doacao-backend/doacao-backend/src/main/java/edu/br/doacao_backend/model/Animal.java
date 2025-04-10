package edu.br.doacao_backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "animals")
@Getter
@Setter
public class Animal {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    private String name;

    private String gender;

    private String specie;

    private String race;

    private String imagePath;

    private int age;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_medical_condition", referencedColumnName = "id")
    private MedicalCondition medical_conditions;

}
