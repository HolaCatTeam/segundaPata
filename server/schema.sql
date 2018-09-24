DROP DATABASE IF EXISTS segundaPata;

CREATE DATABASE segundaPata;

USE segundaPata;

CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  descrip varchar(150) NOT NULL,
  price varchar(50) NOT NULL,
  category varchar(50) NOT NULL,
  email varchar(50) NOT NULL,
  vendor varchar(50) NOT NULL,
  picturePath varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql
 *  to create the database and the tables.*/

INSERT INTO items (name, descrip, price, category, email, vendor, picturePath) VALUES ("hueso mordido", "Hueso de dinosaurio súper sabroso, listo para morder", "$10.00", "juguetes", "amanda@cameil.com", "Juanito García", "5A4Tek6");
INSERT INTO items (name, descrip, price, category, email, vendor, picturePath) VALUES ("camita suave", "50cm de diámetro, solo un dueño anterior", "$30.00", "camitas", "pamela@cameil.com", "Pamela Costa", "XKfatYs");
INSERT INTO items (name, descrip, price, category, email, vendor, picturePath) VALUES ("casita de madera", "Para perro pequeño. Nuestro cachorro creció demasiado rápido!", "$10.00", "accesorios", "arnold@cameil.com", "Arnold Guadarrama", "x825ZGM");
INSERT INTO items (name, descrip, price, category, email, vendor, picturePath) VALUES ("comida pedigrí", "bolsa tamaño 400 oz", "$50.00", "accesorios", "amanda@cameil.com", "Amanda de la Costa", "WeCudcQ");
INSERT INTO items (name, descrip, price, category, email, vendor, picturePath) VALUES ("zapato viejo", "de la marca nike, perfecto para morder, sabor a queso", "$10.00", "juguetes", "alicia@cameil.com", "Alicia Maravillas", "dSwTjqE");
INSERT INTO items (name, descrip, price, category, email, vendor, picturePath) VALUES ("suéter a rayas", "tamaño Chihuahua, casi nuevo", "$25.00", "ropa", "lalord@cameil.com", "Eduardo de León", "byKLxbN");

CREATE TABLE avatar (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  image_path varchar(500) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO avatar (name, image_path) VALUES ("pug", "PrmfMwq");
INSERT INTO avatar (name, image_path) VALUES ("cuteDog", "uTEwIms");
INSERT INTO avatar (name, image_path) VALUES ("dog", "e52MmBb");
INSERT INTO avatar (name, image_path) VALUES ("bigDog", "j3sdyZU");
INSERT INTO avatar (name, image_path) VALUES ("spotDog", "5lOxGqV");
INSERT INTO avatar (name, image_path) VALUES ("pomerianDog", "FDIXAnQ");
INSERT INTO avatar (name, image_path) VALUES ("b/n dog", "KxhXOCj");
INSERT INTO avatar (name, image_path) VALUES ("coquer", "MijhQSl");
INSERT INTO avatar (name, image_path) VALUES ("dogSmall", "7BL5Y7J");
INSERT INTO avatar (name, image_path) VALUES ("cat2", "F7MJ7ND");
