/*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql
 *  For example, on a pairing station, it'll be
 *    mysql -u student -p < schema.sql
 *  and then you'll have to enter the password, student
 *  On your personal computer, if you haven't set up
 *  a password, it'll be
 *    mysql -u root < schema.sql
*/

DROP DATABASE IF EXISTS movies; -- will also drop user data, be careful

CREATE DATABASE movies;

USE movies;

CREATE TABLE movies (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  watched BOOLEAN NOT NULL
);

-- DESCRIBE movies;

INSERT INTO movies (name, watched) VALUES ('Mean Girls', true);
INSERT INTO movies (name, watched) VALUES ('Hackers', false);
INSERT INTO movies (name, watched) VALUES ('The Grey', true);
INSERT INTO movies (name, watched) VALUES ('Sunshine', false);
INSERT INTO movies (name, watched) VALUES ('Ex Machina', false);

-- {title: 'Mean Girls', watched: true},
-- {title: 'Hackers'},
-- {title: 'The Grey', watched: true},
-- {title: 'Sunshine'},
-- {title: 'Ex Machina'}

-- SELECT * FROM groceries;

/*
mysql -u root -p
mysql -u root -p < schema.sql
*/
