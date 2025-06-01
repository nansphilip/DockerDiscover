-- Creates an user and a password
CREATE USER IF NOT EXISTS 'todo_user'@'localhost' IDENTIFIED BY 'todo_password';

-- Allows user to connect to database
GRANT ALL PRIVILEGES ON *.* TO 'todo_user'@'localhost';

-- Create the database
CREATE DATABASE IF NOT EXISTS `todo_db`;

-- Grant privileges to the user on the database
GRANT ALL PRIVILEGES ON `todo_db`.* TO 'todo_user'@'localhost';
