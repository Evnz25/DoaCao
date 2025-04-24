drop schema if exists doacao;

create schema doacao;
show databases;

use doacao;
show tables;
desc animals;
desc medical_conditions;

select * from animals;

insert into animals(id, age, gender, image_path, name, race, specie, id_medical_condition) values
(1, 2, "Macho", "/uploads/ZecaPic.png", "Zeca", "Vira Lata", "Cachorro", 1),
(2, 1, "Fêmea", "/uploads/NinaPic.png", "Nina", "Vira Lata", "Cachorro", 2),
(3, 4, "Fêmea", "/uploads/BellaPic.png", "Nina", "Vira Lata", "Cachorro", 3);

insert into medical_conditions(id, injuries, sickness, medicine, vaccine, castrated) values
(1, "Não tem", "Não tem", "Não tem", "Raiva", "Sim"),
(2, "Não tem", "Não tem", "Não tem", "Raiva", "Sim"),
(3, "Não tem", "Não tem", "Não tem", "Raiva", "Sim");
