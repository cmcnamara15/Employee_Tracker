INSERT INTO department(department_name)
VALUES  ('Sales'),
        ('Finance'),
        ('Legal'),
        ('Engineering');

Insert INTO role(title, salary, department_id)
VALUES  ('Sales Manager', 45000, 1),
        ('Engineer', 60000, 4),
        ('Lawyer', 75000, 3),
        ('Accountant' 75000, 2),
        ('Sales Person', 30000, 1);

Insert INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('John', 'Smith', 1, NULL),
        ('Ann', 'Taylor', 5, 1 );
        
