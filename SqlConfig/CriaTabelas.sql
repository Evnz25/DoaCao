-- -----------------------------------------------------
-- Schema clinica_doacao
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS clinica_doacao;

-- -----------------------------------------------------
-- Schema clinica_doacao
-- -----------------------------------------------------
CREATE SCHEMA clinica_doacao;
USE clinica_doacao;

-- -----------------------------------------------------
-- Table clinica_doacao.condiçao_medica
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS clinica_doacao.condicoes (
  id_Condicao INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  machucado VARCHAR(45) NOT NULL,
  doenca VARCHAR(45) NOT NULL,
  remedios VARCHAR(45) NOT NULL,
  vacinas VARCHAR(45) NOT NULL,
  castrado BOOLEAN NOT NULL
  );

-- -----------------------------------------------------
-- Table clinica_doacao.especie
-- ----------------------------------------------------- 
CREATE TABLE IF NOT EXISTS clinica_doacao.especies (
id_Especie INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL
);

-- -----------------------------------------------------
-- Table clinica_doacao.racas
-- ----------------------------------------------------- 
CREATE TABLE IF NOT EXISTS clinica_doacao.racas (
id_Raca INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL
);


-- -----------------------------------------------------
-- Table clinica_doacao.animais
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS clinica_doacao.animais (
  id_Animal INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(45) NOT NULL,
  sexo VARCHAR(45) NOT NULL,
  raca VARCHAR(45) NOT NULL,
  data_nascimento DATE NOT NULL,
  imagePath VARCHAR(45) NOT NULL,
  id_Condicao INT NOT NULL,
  id_Especie INT NOT NULL,
  id_Raca INT NOT NULL,
  FOREIGN KEY (id_Condicao) REFERENCES condicoes(id_Condicao),
  FOREIGN KEY (id_Especie) REFERENCES especies(id_Especie),
  FOREIGN KEY (id_Raca) REFERENCES racas(id_Raca)
  );

-- -----------------------------------------------------
-- Table clinica_doacao.cidades
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS clinica_doacao.cidades (
  id_Cidade INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(45) NOT NULL,
  uf VARCHAR(2) NOT NULL
  );

-- -----------------------------------------------------
-- Table clinica_doacao.enderecos
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS clinica_doacao.enderecos (
  id_Endereco INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cep VARCHAR(45) NOT NULL,
  bairro VARCHAR(45) NOT NULL,
  numero VARCHAR(45) NOT NULL,
  id_Cidade INT NOT NULL,
  FOREIGN KEY (id_Cidade) REFERENCES cidades(id_Cidade)
  );


-- -----------------------------------------------------
-- Table clinica_doacao.cliente
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS clinica_doacao.clientes (
  id_Cliente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(45) NOT NULL,
  cpf VARCHAR(15) NOT NULL,
  telefone VARCHAR(13) NOT NULL,
  email VARCHAR(45) NOT NULL,
  id_Endereco INT NOT NULL,
  FOREIGN KEY (id_Endereco) REFERENCES enderecos(id_Endereco)
  );

-- -----------------------------------------------------
-- Table clinica_doacao.funcionario
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS clinica_doacao.funcionarios (
  id_Funcionario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(45) NOT NULL,
  cpf VARCHAR(15) NOT NULL,
  telefone VARCHAR(13) NOT NULL,
  email VARCHAR(45) NOT NULL,
  endereco_idEndereco INT NOT NULL,
  id_Endereco INT NOT NULL,
  FOREIGN KEY (id_Endereco) REFERENCES enderecos(id_Endereco)
  );


-- -----------------------------------------------------
-- Table clinica_doacao.doacao
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS clinica_doacao.doacao (
  id_doacao int not null PRIMARY KEY AUTO_INCREMENT,
  data_doacao VARCHAR(45) NOT NULL,
  status VARCHAR(45) NOT NULL,
  id_Funcionario INT NOT NULL,
  id_Cliente INT NOT NULL,
  id_Animal INT NOT NULL,
  id_Endereco INT NOT NULL,
  FOREIGN KEY (id_Funcionario) REFERENCES funcionarios(id_Funcionario),
  FOREIGN KEY (id_Cliente) REFERENCES clientes(id_Cliente),
  FOREIGN KEY (id_Animal) REFERENCES animais (id_Animal),
  FOREIGN KEY (id_Endereco) REFERENCES enderecos(id_Endereco)
  );

