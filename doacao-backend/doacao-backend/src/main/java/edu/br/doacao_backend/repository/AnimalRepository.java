package edu.br.doacao_backend.repository;

import edu.br.doacao_backend.model.Animal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnimalRepository extends JpaRepository<Animal, Long> {
}
