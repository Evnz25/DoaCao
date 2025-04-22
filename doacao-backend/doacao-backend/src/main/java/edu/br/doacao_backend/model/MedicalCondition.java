package edu.br.doacao_backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "medical_conditions")
@Getter
@Setter
public class MedicalCondition {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private String injuries;

    private String sickness;

    private String medicine;

    private List<String> vaccine = new ArrayList<>();

    private String castrated;

}
