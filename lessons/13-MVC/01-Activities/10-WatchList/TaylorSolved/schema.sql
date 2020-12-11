/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Drops the movies_db if it already exists --
DROP DATABASE IF EXISTS movies_db;

-- Create the database movies_db and specified it for use.
CREATE DATABASE movies_db;

USE movies_db;

-- Create the table movies.
CREATE TABLE movies (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO movies (name) VALUES ('Joker');
