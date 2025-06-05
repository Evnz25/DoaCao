package edu.br.doacao_backend.repository;

import edu.br.doacao_backend.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long> {
}
