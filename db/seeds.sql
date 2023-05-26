
       INSERT INTO departments (id, dep_name)
VALUES (1, "Engineering"),
       (2, "Sales"),
       (3, "Finance"),
       (4, "Legal"),
       (5, "Appliances"),
       (6, "Plumbing"),
       (7, "Flooring"),
       (8, "Flex");

INSERT INTO roles (id, title, salary, department_id)
VALUES (1, "Engineering associate", 25000, 1),
        (2, "Sales associate", 25000, 2),
        (3, "Finance associate", 25000, 3),
        (4, "Legal associate", 25000, 4),
        (5, "Appliances associate", 25000, 5),
        (6, "Plumbing associate", 25000, 6),
        (7, "Flooring associate", 25000, 7),
        (8, "Engineering supervisor", 40000, 1),
        (9, "Sales supervisor", 35000, 2),
        (10, "Finance supervisor", 35000, 3),
        (11, "Legal supervisor", 45000, 4),
        (12, "Appliances supervisor", 40000, 5),
        (13, "Plumbing supervisor", 45000, 6),
        (14, "Flooring supervisor", 40000, 7);

INSERT INTO employees (id, first_name, last_name, role_id, is_supervisor)
VALUES (1, "John1", "Doe1", 1, 0),
        (2, "John2", "Doe2", 1, 0),
        (3, "John3", "Doe3", 2, 0),
        (4, "John4", "Doe4", 2, 0),
        (5, "John5", "Doe5", 3, 0),
        (6, "John6", "Doe6", 3, 0),
        (7, "John7", "Doe7", 4, 0),
        (8, "Jane1", "Doe1", 4, 0),
        (9, "Jane2", "Doe2", 5, 0),
        (10, "Jane3", "Doe3", 5, 0),
        (11, "Jane4", "Doe4", 6, 0),
        (12, "Jane5", "Doe5", 6, 0),
        (13, "Jane6", "Doe6", 7, 0),
        (14, "Jane7", "Doe7", 7, 0),
        (15, "Allison", "Amareto", 8, 1),
        (16, "Ben", "Babai", 9, 1),
        (17, "Cameron", "Coats", 10, 1),
        (18, "Damaris", "DeLeon", 11, 1),
        (19, "Eric", "Erickson", 12, 1),
        (20, "Frank", "Fernandez", 13, 1),
        (21, "George", "Ghallagher", 14, 1);



