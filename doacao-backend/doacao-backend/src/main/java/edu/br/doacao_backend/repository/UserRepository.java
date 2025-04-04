package edu.br.doacao_backend.repository;

import edu.br.doacao_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
