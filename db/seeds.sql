INSERT INTO department(department_name)
VALUES  ('Sales'),
        ('Engineering'),
        ('Legal'),
        ('Finance');

Insert INTO role(title, salary, department_id)
VALUES  ('Sales Lead', 100000, 1),
        ('Lead Engineer', 60000, 2),
        ('Legal Team Lead', 250000, 3),
        ('Account Manager', 160000, 4),
        ('Sales Person', 80000, 1),
        ('Software Engineer', 120000, 4),
        ('lawyer', 190000, 3),
        ('Accountant', 125000, 2);

Insert INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('John', 'Smith', 1, NULL),
        ('Ann', 'Taylor', 5, 1 );
        ('Mike', 'Jackson', , 2)
        
