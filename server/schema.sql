DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  user VARCHAR(20), room VARCHAR(20), message VARCHAR(140)
);

CREATE TABLE users (
  user VARCHAR(20)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

