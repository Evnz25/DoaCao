-- MySQL Workbench Forward Engineering

-- -----------------------------------------------------
-- Schema clinica_doacao
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `clinica_doacao` ;

-- -----------------------------------------------------
-- Schema clinica_doacao
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `clinica_doacao` DEFAULT CHARACTER SET utf8 ;
USE `clinica_doacao` ;

-- -----------------------------------------------------
-- Table `clinica_doacao`.`condiçao_medica`
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
id_especie INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL
);

-- -----------------------------------------------------
-- Table clinica_doacao.animal
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS clinica_doacao.animals (
  id_Animal INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(45) NOT NULL,
  sexo VARCHAR(45) NOT NULL,
  raca VARCHAR(45) NOT NULL,
  data_nascimento DATE NOT NULL,
  imagePath VARCHAR(45) NOT NULL,
  id_Condicao INT NOT NULL,
  id_Especie INT NOT NULL,
  FOREIGN KEY (id_Condicao) REFERENCES condicoes(id_Condicao)
  FOREIGN KEY (id_Especie) REFERENCES especies(id_Especie)
  );


-- -----------------------------------------------------
-- Table clinica_doacao.endereco
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS clinica_doacao.enderecos (
  id_Endereco INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cep VARCHAR(45) NOT NULL,
  cidade VARCHAR(45) NOT NULL,
  bairro VARCHAR(45) NOT NULL,
  numero VARCHAR(45) NOT NULL,


-- -----------------------------------------------------
-- Table `clinica_doacao`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `clinica_doacao`.`clientes` (
  `idCliente` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `cpf` VARCHAR(15) NOT NULL,
  `telefone` VARCHAR(13) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `endereco_idEndereco` INT NOT NULL,
  id_endereco int not null,
  PRIMARY KEY (`idCliente`),
    FOREIGN KEY (`id_Endereco`)
    REFERENCES `clinica_doacao`.`endereco` (`id_Endereco`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)

-- -----------------------------------------------------
-- Table `clinica_doacao`.`funcionario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `clinica_doacao`.`funcionarios` (
  `idFuncionario` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `cpf` VARCHAR(15) NOT NULL,
  `telefone` VARCHAR(13) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `endereco_idEndereco` INT NOT NULL,
  id_endereco int not null,
  PRIMARY KEY (`idFuncionario`),
    FOREIGN KEY (`id_Endereco`)
    REFERENCES `clinica_doacao`.`endereco` (`id_Endereco`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)


-- -----------------------------------------------------
-- Table `clinica_doacao`.`doacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `clinica_doacao`.`doacao` (
    id_doacao int not null PRIMARY key AUTO_INCREMENT,
  `data_doacao` VARCHAR(45) NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `funcionario_idFuncionario` INT NOT NULL,
  `id_Cliente` INT NOT NULL,
  `id_Animal` INT NOT NULL,
  id_funcionario int not null,

    FOREIGN KEY (`id_Funcionario`)
    REFERENCES `clinica_doacao`.`funcionario` (`id_Funcionario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    FOREIGN KEY (`id_Cliente`)
    REFERENCES `clinica_doacao`.`cliente` (`id_Cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,

    FOREIGN KEY (`id_Animal`)
    REFERENCES `clinica_doacao`.`animal` (`id_Animal`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)




desc animals;
desc condicao;

select * from animals;

insert into especies(id_especie,nome) values(1,'cachorro'),(2,'gato');
insert into condicao()
insert into animals(id_Animal,id_especie,nome,sexo,raca,data_nascimento,imagePath,id_Condicao) values
(1,1,'Zeca',1,'Vira Lata','10/10/2010',"/uploads/ZecaPic.png",1),
(1, 2, "Macho", "/uploads/ZecaPic.png", "Zeca", "Vira Lata", "Cachorro", 1),
(2, 1, "Fêmea", "/uploads/NinaPic.png", "Nina", "Vira Lata", "Cachorro", 2),
(3, 4, "Fêmea", "/uploads/BellaPic.png", "Nina", "Vira Lata", "Cachorro", 3);

insert into medical_conditions(idanimal, injuries, sickness, medicine, vaccine, castrated) values
(1, "Não tem", "Não tem", "Não tem", "Raiva", "Sim"),
(2, "Não tem", "Não tem", "Não tem", "Raiva", "Sim"),
(3, "Não tem", "Não tem", "Não tem", "Raiva", "Sim");
