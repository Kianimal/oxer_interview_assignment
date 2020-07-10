CREATE DATABASE company_info;

USE company_info;

DROP TABLE if EXISTS ibm_employees;
DROP TABLE if EXISTS lyft_employees;
DROP TABLE if EXISTS ihop_employees;

CREATE TABLE ibm_employees (
	id INT NOT NULL AUTO_INCREMENT,
	employee_name VARCHAR(30) NOT NULL,
    employee_id INT NOT NULL,
    start_date VARCHAR(255) NOT NULL,
    end_date VARCHAR(255),
    primary key (id)
);

CREATE TABLE lyft_employees (
	id INT NOT NULL AUTO_INCREMENT,
	employee_name VARCHAR(30) NOT NULL,
    employee_id INT NOT NULL,
    start_date VARCHAR(255) NOT NULL,
    end_date VARCHAR(255),
    primary key (id)
);

CREATE TABLE ihop_employees (
	id INT NOT NULL AUTO_INCREMENT,
	employee_name VARCHAR(30) NOT NULL,
    employee_id INT NOT NULL,
    start_date VARCHAR(255) NOT NULL,
    end_date VARCHAR(255),
    primary key (id)
);