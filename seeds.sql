INSERT INTO department (name)
VALUES ("Engineering"),
       ("Sales"),
       ("Finance"),
       ("Legal")

INSERT INTO roles (title, salary, department_id)
VALUES ("Software Engineer", 85000, 1),
       ("Salesperson", 50000, 2),
       ("Accountant", 120000, 4),
       ("Lawyer", 200000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Allison", "Amareto", 1, 4),
       ("Ben", "Babai", 2, 3),
       ("Cameron", "Coats", 3, 2),
       ("Damaris", "DeLeon", 4, 1);



