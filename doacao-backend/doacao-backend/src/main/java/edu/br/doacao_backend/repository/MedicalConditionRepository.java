package edu.br.doacao_backend.repository;

import edu.br.doacao_backend.model.MedicalCondition;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicalConditionRepository extends JpaRepository<MedicalCondition, Long> {
}
