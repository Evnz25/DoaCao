package edu.br.doacao_backend.repository;

import edu.br.doacao_backend.model.Donation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DonationRepository extends JpaRepository<Donation, Long>{
    
}
