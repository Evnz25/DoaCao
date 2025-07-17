package edu.br.doacao_backend.repository;

import edu.br.doacao_backend.model.Donation;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DonationRepository extends JpaRepository<Donation, Long>{
    List<Donation> findByStatus(String status);
}
