
CREATE DATABASE IF NOT EXISTS nodedb;
CREATE TABLE IF NOT EXISTS `nodedb`.`people` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL  
);
INSERT INTO `nodedb`.`people` (name) VALUES ('Sunny');
INSERT INTO `nodedb`.`people` (name) VALUES ('Lee');