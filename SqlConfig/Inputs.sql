use clinica_doacao;

-- -----------------------------------------------------
-- Inserts para a tabela `clinica_doacao`.`paises`
-- -----------------------------------------------------
INSERT INTO `paises` (`nome`) VALUES
('Brasil'),
('Argentina'),
('Chile'),
('Colômbia');

-- -----------------------------------------------------
-- Inserts para a tabela `clinica_doacao`.`cidades`
-- -----------------------------------------------------
INSERT INTO `cidades` (`nome`, `uf`, `ID_Pais`) VALUES
('São Paulo', 'SP', 1),
('Rio de Janeiro', 'RJ', 1),
('Buenos Aires', 'BA', 2),
('Santiago', 'RM', 3),
('Bogotá', 'DC', 4);

-- -----------------------------------------------------
-- Inserts para a tabela `clinica_doacao`.`racas`
-- -----------------------------------------------------
INSERT INTO `racas` (`nome`) VALUES
('Labrador'),
('Poodle'),
('Bulldog'),
('Siamês');

-- -----------------------------------------------------
-- Inserts para a tabela `clinica_doacao`.`especies`
-- -----------------------------------------------------
INSERT INTO `especies` (`nome`, `ID_Raca`) VALUES
('Cachorro', 1),
('Gato', 4),
('Cachorro', 2),
('Cachorro', 3);

-- -----------------------------------------------------
-- Inserts para a tabela `clinica_doacao`.`condicao`
-- -----------------------------------------------------
INSERT INTO `condicao` (`machucado`, `doenca`, `remedios`, `vacinas`, `castrado`) VALUES
('Não', 'Nenhuma', 'Nenhum', 'Sim', TRUE),
('Sim', 'Gripe', 'Antibiótico', 'Não', FALSE),
('Não', 'Nenhuma', 'Nenhum', 'Sim', TRUE),
('Sim', 'Vermes', 'Vermífugo', 'Sim', TRUE);

-- -----------------------------------------------------
-- Inserts para a tabela `clinica_doacao`.`animals`
-- -----------------------------------------------------
INSERT INTO `animals` (`ID_Especie`, `nome`, `sexo`, `raca`, `data_nascimento`, `imagePath`, `ID_Condicao`) VALUES
(1, 'Rex', 'Macho', 'Labrador', '2020-01-15', '/images/rex.jpg', 1),
(2, 'Mia', 'Fêmea', 'Siamês', '2019-05-20', '/images/mia.jpg', 2),
(1, 'Bobby', 'Macho', 'Poodle', '2021-03-10', '/images/bobby.jpg', 3),
(1, 'Max', 'Macho', 'Bulldog', '2018-07-25', '/images/max.jpg', 4);

-- -----------------------------------------------------
-- Inserts para a tabela `clinica_doacao`.`enderecos`
-- -----------------------------------------------------
INSERT INTO `enderecos` (`cep`, `cidade`, `bairro`, `numero`) VALUES
('01000-000', 'São Paulo', 'Centro', '100'),
('22222-222', 'Rio de Janeiro', 'Copacabana', '200'),
('10000-000', 'Buenos Aires', 'Palermo', '300'),
('40000-000', 'Santiago', 'Providencia', '400');

-- -----------------------------------------------------
-- Inserts para a tabela `clinica_doacao`.`clientes`
-- -----------------------------------------------------
INSERT INTO `clientes` (`nome`, `cpf`, `telefone`, `email`, `ID_Endereco`) VALUES
('João Silva', '123.456.789-00', '(11) 91234-5678', 'joao@example.com', 1),
('Maria Oliveira', '987.654.321-00', '(21) 99876-5432', 'maria@example.com', 2),
('Carlos Pereira', '111.222.333-44', '(11) 93456-7890', 'carlos@example.com', 3);

-- -----------------------------------------------------
-- Inserts para a tabela `clinica_doacao`.`funcionarios`
-- -----------------------------------------------------
INSERT INTO `funcionarios` (`nome`, `cpf`, `telefone`, `email`, `ID_Endereco`) VALUES
('Ana Costa', '222.333.444-55', '(11) 92345-6789', 'ana@example.com', 1),
('Pedro Santos', '333.444.555-66', '(21) 91234-5678', 'pedro@example.com', 2);

-- -----------------------------------------------------
-- Inserts para a tabela `clinica_doacao`.`doacao`
-- -----------------------------------------------------
INSERT INTO `doacao` (`data_doacao`, `status`, `ID_Funcionario`, `ID_Cliente`, `ID_Animal`) VALUES
('2023-10-01', 'Completa', 1, 1, 1),
('2023-10-02', 'Pendente', 2, 2, 2),
('2023-10-03', 'Completa', 1, 3, 3);