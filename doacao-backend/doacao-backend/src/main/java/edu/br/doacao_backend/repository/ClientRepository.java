package edu.br.doacao_backend.repository;

import edu.br.doacao_backend.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
}