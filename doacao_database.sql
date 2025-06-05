drop schema if exists doacao;

create schema doacao;
show databases;

use doacao;
show tables;
desc animals;
desc medical_conditions;

select * from animals;

insert into medical_conditions(id, injuries, sickness, medicine, vaccine, castrated) values
(1, "Não tem", "Não tem", "Não tem", "Raiva", "Sim"),
(2, "Não tem", "Não tem", "Não tem", "Raiva", "Sim"),
(3, "Não tem", "Não tem", "Não tem", "Raiva", "Sim");

insert into animals(id, age, gender, image_path, name, race, specie, id_medical_condition) values
(1, 2, "Macho", "/uploads/ZecaPic.png", "Zeca", "Vira Lata", "Cachorro", 1),
(2, 1, "Fêmea", "/uploads/NinaPic.png", "Nina", "Vira Lata", "Cachorro", 2),
(3, 4, "Fêmea", "/uploads/BellaPic.png", "Nina", "Vira Lata", "Cachorro", 3);

insert into addresses(id, cep, city, neighborhood, number) values
(1, "86034700", "Nova Esperanza", "Vila Mimosa", "378"),
(2, "63192482", "Cambé", "Gamba", "45");

insert into clients(id, name, cpf, phone, email, id_address) values
(1, "José Marcos", "099854976", "9984546559", "josemaquinhios@gmail.com", 1);

insert into employees(id, name, email, cpf, phone, age, id_address) values
(1, "José Paulo", "josepaulinho@gmail.com", "999854976", "9984546559", "32", 2);

insert into donation(id, data, status, id_employee, id_client, id_animal) values
(1, "12/05/2025", "Aprovado", 1, 1, 1); 

desc donation;


