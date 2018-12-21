CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (id INT AUTO_INCREMENT PRIMARY KEY,
  roomName VARCHAR(20)
);

CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY,
  userName VARCHAR(20)
);

CREATE TABLE messages(id INT AUTO_INCREMENT PRIMARY KEY,
  messageText VARCHAR(225),
  userId INT,
  roomId INT,
  FOREIGN KEY (userId) 
    REFERENCES users(id)
    ON DELETE CASCADE,
  FOREIGN KEY (roomId) 
    REFERENCES rooms(id)
    ON DELETE CASCADE
  
);

-- ALTER TABLE messages
-- ADD FOREIGN KEY (userId) REFERENCES users(id);

-- ALTER TABLE messages
-- ADD FOREIGN KEY (roomId) REFERENCES rooms(id);


/* Describe your table here.*/


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

