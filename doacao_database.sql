drop schema if exists doacao;

create schema doacao;
show databases;

use doacao;
show tables;
desc animal;

select * from animal;

insert into animal(id, age, gender, image_path, name, race, specie) values
(1, 2, "Macho", "/uploads/ZecaPic.png", "Zeca", "Vira Lata", "Cachorro"),
(2, 1, "Fêmea", "/uploads/NinaPic.png", "Nina", "Vira Lata", "Cachorro"),
(3, 4, "Fêmea", "/uploads/BellaPic.png", "Nina", "Vira Lata", "Cachorro");