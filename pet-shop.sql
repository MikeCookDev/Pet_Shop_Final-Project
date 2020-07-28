DROP DATABASE IF EXISTS pet_shop;
CREATE DATABASE pet_shop;

USE pet_shop;

CREATE TABLE grooming (
  GroomingID int(11) NOT NULL AUTO_INCREMENT,
  FirstName varchar(50) NOT NULL,
  LastName varchar(50) NOT NULL,
  Address varchar(200) NOT NULL,
  City varchar(45) NOT NULL,
  State varchar(45) NOT NULL,
  Zip varchar(45) NOT NULL,
  PhoneNumber varchar(15) NOT NULL,
  Email varchar(150) DEFAULT NULL,
  PetType varchar(45) NOT NULL,
  Breed varchar(45) DEFAULT NULL,
  PetName varchar(45) NOT NULL,
  NeuteredOrSpayed tinyint(1) DEFAULT NULL,
  PetBirthday datetime DEFAULT NULL,
  PRIMARY KEY (GroomingID)
);