-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS seinfeld_db;

-- Created the DB "seinfeld_db" (only works on local connections)
CREATE DATABASE seinfeld_db;

-- Use the DB seinfeld_db for all the rest of the script
USE seinfeld_db;

-- Created the table "schools"
CREATE TABLE characters (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  attitude VARCHAR(30) NOT NULL,
  coolness_points INT NOT NULL,
  PRIMARY KEY(id)
);

-- Inserted a set of records into the table
INSERT INTO characters (name, attitude, coolness_points)
VALUES ("Jerry", "funny", 6),
("Kramer", "eccentric", 10),
("George", "aggravated", 4),
("Elaine", "funny", 8)
