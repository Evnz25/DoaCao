drop schema if exists doacao;

create schema doacao;
show databases;

use doacao;
show tables;
desc animals;
desc medical_conditions;

select * from animal;

insert into animals(id_animal, age, gender, image_path, name, race, specie) values
(1, 2, "Macho", "/uploads/ZecaPic.png", "Zeca", "Vira Lata", "Cachorro"),
(2, 1, "Fêmea", "/uploads/NinaPic.png", "Nina", "Vira Lata", "Cachorro"),
(3, 4, "Fêmea", "/uploads/BellaPic.png", "Nina", "Vira Lata", "Cachorro");

insert into medical_conditions(id, injuries, sickness, medicine, vaccine, castrated) values
(1, "Não tem", "Não tem", "Não tem", "Não tem", "Sim"),
(2, "Não tem", "Não tem", "Não tem", "Não tem", "Sim"),
(3, "Não tem", "Não tem", "Não tem", "Não tem", "Sim");
