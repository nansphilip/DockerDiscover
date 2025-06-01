-- Shows users privileges (local)
SHOW GRANTS FOR 'todo_user'@'localhost';

-- Shows users privileges (docker)
SHOW GRANTS FOR 'todo_user'@'%';

-- Shows all tables for the database
SHOW TABLES FROM `todo_db`;

-- Shows all users
SELECT User FROM mysql.user;

-- Shows all databases
SHOW DATABASES;