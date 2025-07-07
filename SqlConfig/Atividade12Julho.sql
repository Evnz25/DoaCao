-- Criação do schema
DROP SCHEMA IF EXISTS clinica_doacao;
CREATE SCHEMA clinica_doacao;
USE clinica_doacao;

-- Tabela condicoes
CREATE TABLE condicoes (
  id_Condicao INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  machucado VARCHAR(45) NOT NULL,
  doenca VARCHAR(45) NOT NULL,
  remedios VARCHAR(45) NOT NULL,
  vacinas VARCHAR(45) NOT NULL,
  castrado BOOLEAN NOT NULL
);

-- Tabela especies
CREATE TABLE especies (
  id_Especie INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL
);

-- Tabela racas
CREATE TABLE racas (
  id_Raca INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL
);

-- Tabela cidades
CREATE TABLE cidades (
  id_Cidade INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(45) NOT NULL,
  uf VARCHAR(2) NOT NULL
);

-- Tabela enderecos
CREATE TABLE enderecos (
  id_Endereco INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cep VARCHAR(45) NOT NULL,
  bairro VARCHAR(45) NOT NULL,
  numero VARCHAR(45) NOT NULL,
  id_Cidade INT NOT NULL,
  FOREIGN KEY (id_Cidade) REFERENCES cidades(id_Cidade)
);

-- Tabela clientes
CREATE TABLE clientes (
  id_Cliente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(45) NOT NULL,
  cpf VARCHAR(15) NOT NULL,
  telefone VARCHAR(13) NOT NULL,
  email VARCHAR(45) NOT NULL,
  id_Endereco INT NOT NULL,
  FOREIGN KEY (id_Endereco) REFERENCES enderecos(id_Endereco)
);

-- Tabela funcionarios
CREATE TABLE funcionarios (
  id_Funcionario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(45) NOT NULL,
  cpf VARCHAR(15) NOT NULL,
  telefone VARCHAR(13) NOT NULL,
  email VARCHAR(45) NOT NULL,
  id_Endereco INT NOT NULL,
  FOREIGN KEY (id_Endereco) REFERENCES enderecos(id_Endereco)
);

-- Tabela animals
CREATE TABLE animals (
  id_Animal INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(45) NOT NULL,
  sexo VARCHAR(10) NOT NULL,
  raca VARCHAR(45) NOT NULL,
  data_nascimento DATE NOT NULL,
  imagePath VARCHAR(100) NOT NULL,
  id_Condicao INT NOT NULL,
  id_Especie INT NOT NULL,
  id_Raca INT NOT NULL,
  FOREIGN KEY (id_Condicao) REFERENCES condicoes(id_Condicao),
  FOREIGN KEY (id_Especie) REFERENCES especies(id_Especie),
  FOREIGN KEY (id_Raca) REFERENCES racas(id_Raca)
);

-- Tabela doacao
CREATE TABLE doacao (
  id_doacao INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  data_doacao VARCHAR(45) NOT NULL,
  status VARCHAR(45) NOT NULL,
  id_Funcionario INT NOT NULL,
  id_Cliente INT NOT NULL,
  id_Animal INT NOT NULL,
  id_Endereco INT NOT NULL,
  FOREIGN KEY (id_Funcionario) REFERENCES funcionarios(id_Funcionario),
  FOREIGN KEY (id_Cliente) REFERENCES clientes(id_Cliente),
  FOREIGN KEY (id_Animal) REFERENCES animals(id_Animal),
  FOREIGN KEY (id_Endereco) REFERENCES enderecos(id_Endereco)
);

-- Inserts em condicoes
INSERT INTO condicoes (machucado, doenca, remedios, vacinas, castrado) VALUES
('Não', 'Nenhuma', 'Nenhum', 'Raiva', TRUE),
('Sim', 'Sarna', 'Antibiótico', 'Raiva', FALSE),
('Não', 'Vermes', 'Vermífugo', 'V8', TRUE),
('Sim', 'Nenhuma', 'Nenhum', 'V10', TRUE),
('Não', 'Nenhuma', 'Vitaminas', 'Raiva', TRUE),
('Sim', 'Infecção', 'Antibiótico', 'V10', FALSE),
('Não', 'Nenhuma', 'Nenhum', 'Raiva', TRUE),
('Sim', 'Cinomose', 'Antiviral', 'V8', FALSE),
('Não', 'Nenhuma', 'Vitaminas', 'Raiva', TRUE),
('Sim', 'Parvovirose', 'Antiviral', 'V10', FALSE);

-- Inserts em especies
INSERT INTO especies (nome) VALUES
('Cachorro'),
('Gato'),
('Coelho'),
('Pássaro'),
('Hamster'),
('Tartaruga'),
('Cavalo'),
('Porquinho-da-índia'),
('Pato'),
('Rato');

-- Inserts em racas
INSERT INTO racas (nome) VALUES
('Vira-Lata'),
('Poodle'),
('Persa'),
('Siamês'),
('Angorá'),
('Pastor Alemão'),
('Beagle'),
('Labrador'),
('Bulldog'),
('Chihuahua');

-- Inserts em cidades
INSERT INTO cidades (nome, uf) VALUES
('São Paulo', 'SP'),
('Campinas', 'SP'),
('Rio de Janeiro', 'RJ'),
('Niterói', 'RJ'),
('Curitiba', 'PR'),
('Joinville', 'SC'),
('Florianópolis', 'SC'),
('Porto Alegre', 'RS'),
('Salvador', 'BA'),
('Fortaleza', 'CE');

-- Inserts em enderecos
INSERT INTO enderecos (cep, bairro, numero, id_Cidade) VALUES
('01001-000', 'Centro', '123', 1),
('13025-001', 'Cambuí', '456', 2),
('20031-170', 'Lapa', '789', 3),
('24030-060', 'Icaraí', '101', 4),
('80010-000', 'Centro', '202', 5),
('89201-070', 'América', '303', 6),
('88010-000', 'Centro', '404', 7),
('90010-000', 'Centro', '505', 8),
('40020-000', 'Graça', '606', 9),
('60060-000', 'Aldeota', '707', 10);

-- Inserts em clientes
INSERT INTO clientes (nome, cpf, telefone, email, id_Endereco) VALUES
('João Silva', '12345678901', '11999999999', 'joao@email.com', 1),
('Maria Souza', '98765432100', '11988888888', 'maria@email.com', 2),
('Carlos Lima', '11122233344', '21999999999', 'carlos@email.com', 3),
('Ana Paula', '55566677788', '21988888888', 'ana@email.com', 4),
('Lucas Rocha', '99988877766', '41999999999', 'lucas@email.com', 5),
('Fernanda Alves', '33344455566', '47999999999', 'fernanda@email.com', 6),
('Paulo César', '77788899900', '48999999999', 'paulo@email.com', 7),
('Juliana Costa', '44433322211', '51999999999', 'juliana@email.com', 8),
('Rodrigo Mendes', '88877766655', '71999999999', 'rodrigo@email.com', 9),
('Camila Torres', '22233344455', '85999999999', 'camila@email.com', 10);

-- Inserts em funcionarios
INSERT INTO funcionarios (nome, cpf, telefone, email, id_Endereco) VALUES
('Dr. André', '10101010101', '11988888881', 'andre@clinica.com', 1),
('Dra. Carla', '20202020202', '11988888882', 'carla@clinica.com', 2),
('Dr. Bruno', '30303030303', '11988888883', 'bruno@clinica.com', 3),
('Dra. Helena', '40404040404', '11988888884', 'helena@clinica.com', 4),
('Dr. Rafael', '50505050505', '11988888885', 'rafael@clinica.com', 5),
('Dra. Laura', '60606060606', '11988888886', 'laura@clinica.com', 6),
('Dr. Pedro', '70707070707', '11988888887', 'pedro@clinica.com', 7),
('Dra. Mariana', '80808080808', '11988888888', 'mariana@clinica.com', 8),
('Dr. Felipe', '90909090909', '11988888889', 'felipe@clinica.com', 9),
('Dra. Bianca', '00000000000', '11988888880', 'bianca@clinica.com', 10);

-- Inserts em animais
INSERT INTO animals (nome, sexo, raca, data_nascimento, imagePath, id_Condicao, id_Especie, id_Raca) VALUES
('Zeca', 'Macho', 'Vira-Lata', '2010-10-10', '/uploads/ZecaPic.png', 1, 1, 1),
('Nina', 'Fêmea', 'Poodle', '2012-08-05', '/uploads/NinaPic.png', 2, 1, 2),
('Milo', 'Macho', 'Persa', '2015-05-12', '/uploads/MiloPic.png', 3, 2, 3),
('Luna', 'Fêmea', 'Siamês', '2017-07-20', '/uploads/LunaPic.png', 4, 2, 4),
('Max', 'Macho', 'Beagle', '2013-11-11', '/uploads/MaxPic.png', 5, 1, 7),
('Tobby', 'Macho', 'Labrador', '2018-01-01', '/uploads/TobbyPic.png', 6, 1, 8),
('Bella', 'Fêmea', 'Chihuahua', '2019-03-03', '/uploads/BellaPic.png', 7, 1, 10),
('Thor', 'Macho', 'Pastor Alemão', '2016-09-09', '/uploads/ThorPic.png', 8, 1, 6),
('Mimi', 'Fêmea', 'Angorá', '2020-04-04', '/uploads/MimiPic.png', 9, 2, 5),
('Spike', 'Macho', 'Bulldog', '2014-12-12', '/uploads/SpikePic.png', 10, 1, 9);

-- Inserts em doacao
INSERT INTO doacao (data_doacao, status, id_Funcionario, id_Cliente, id_Animal, id_Endereco) VALUES
('2024-01-10', 'Concluída', 1, 1, 1, 1),
('2024-02-15', 'Concluída', 2, 2, 2, 2),
('2024-03-20', 'Pendente', 3, 3, 3, 3),
('2024-04-25', 'Concluída', 4, 4, 4, 4),
('2024-05-30', 'Cancelada', 5, 5, 5, 5),
('2024-06-05', 'Pendente', 6, 6, 6, 6),
('2024-06-15', 'Concluída', 7, 7, 7, 7),
('2024-06-20', 'Pendente', 8, 8, 8, 8),
('2024-06-25', 'Concluída', 9, 9, 9, 9),
('2024-06-30', 'Pendente', 10, 10, 10, 10);


--Listar os nomes dos animais e suas espécies adotados com sucesso.
SELECT a.nome AS Animal, e.nome AS Especie
FROM animals a
JOIN especies e ON a.id_Especie = e.id_Especie
JOIN doacao d ON a.id_Animal = d.id_Animal
WHERE d.status = 'Concluída';

-- Contar quantos animais de cada espécie foram doados.
SELECT e.nome AS Especie, COUNT(*) AS Total_Doado
FROM doacao d
JOIN animals a ON d.id_Animal = a.id_Animal
JOIN especies e ON a.id_Especie = e.id_Especie
WHERE d.status = 'Concluída'
GROUP BY e.nome;

--Listar clientes que fizeram mais de uma doação.
SELECT c.nome, COUNT(*) AS Total_Doacoes
FROM clientes c
JOIN doacao d ON c.id_Cliente = d.id_Cliente
GROUP BY c.nome
HAVING COUNT(*) > 1;

--Mostrar os dados de contato dos funcionários que participaram de doações pendentes.
SELECT DISTINCT f.nome, f.email, f.telefone
FROM funcionarios f
JOIN doacao d ON f.id_Funcionario = d.id_Funcionario
WHERE d.status = 'Pendente';

--Exibir animais que nunca foram doados.
SELECT nome
FROM animals
WHERE id_Animal NOT IN (SELECT id_Animal FROM doacao);

--Listar as raças mais comuns entre os animais adotados.
SELECT r.nome AS Raca, COUNT(*) AS Total
FROM doacao d
JOIN animals a ON d.id_Animal = a.id_Animal
JOIN racas r ON a.id_Raca = r.id_Raca
WHERE d.status = 'Concluída'
GROUP BY r.nome
ORDER BY Total DESC;

--Listar animais que já têm mais de 10 anos.
SELECT nome, YEAR(CURDATE()) - YEAR(data_nascimento) AS idade
FROM animals
WHERE YEAR(CURDATE()) - YEAR(data_nascimento) > 10;

--Exibir quantos animais castrados foram adotados.
SELECT COUNT(*) AS Total_Castrados
FROM animals a
JOIN condicoes c ON a.id_Condicao = c.id_Condicao
JOIN doacao d ON a.id_Animal = d.id_Animal
WHERE c.castrado = TRUE AND d.status = 'Concluída';

--  Mostrar clientes e os bairros onde moram.
SELECT c.nome, e.bairro
FROM clientes c
JOIN enderecos e ON c.id_Endereco = e.id_Endereco;

-- Listar os nomes dos animais e seus respectivos responsáveis (cliente e funcionário)
SELECT a.nome AS Animal, cli.nome AS Cliente, func.nome AS Funcionario
FROM doacao d
JOIN animals a ON d.id_Animal = a.id_Animal
JOIN clientes cli ON d.id_Cliente = cli.id_Cliente
JOIN funcionarios func ON d.id_Funcionario = func.id_Funcionario;

--Exibir total de doações por cidade.
SELECT ci.nome AS Cidade, COUNT(*) AS Total_Doacoes
FROM doacao d
JOIN enderecos e ON d.id_Endereco = e.id_Endereco
JOIN cidades ci ON e.id_Cidade = ci.id_Cidade
GROUP BY ci.nome;

--Listar os nomes dos animais vacinados contra raiva.
SELECT a.nome
FROM animals a
JOIN condicoes c ON a.id_Condicao = c.id_Condicao
WHERE c.vacinas LIKE '%Raiva%';

--Identificar os animais com doenças registradas.
SELECT nome, doenca
FROM animals a
JOIN condicoes c ON a.id_Condicao = c.id_Condicao
WHERE c.doenca != 'Nenhuma';

--Buscar clientes com e-mails de domínio “@email.com”.
SELECT nome, email
FROM clientes
WHERE email LIKE '%@email.com';

--Mostrar todos os dados dos animais e ordená-los por idade (do mais velho para o mais novo).
SELECT *, TIMESTAMPDIFF(YEAR, data_nascimento, CURDATE()) AS idade
FROM animals
ORDER BY idade DESC;
