const inquirer = require('inquirer');
const mysql = require('mysql2');
require("console.table");
const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'employee_db'
});


function addDepartment(){
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What department would you like to add?',
                name: 'addDep'
            },
        ])
        .then(answers => {
            db.query('INSERT INTO DEPARTMENT (department_name) VALUES (?)', [answers.addDep], (err, dataRes) => {
                main();
            })
        })
}

function addRole(){
    inquirer
        .prompt ([
            {
                type: 'input',
                message: 'What is the title of the role would you like to add?',
                name: 'role'
            },
            {
                type: 'input',
                message: 'What is the annual salary for this role?',
                name: 'salary'
            },
            {
                type: 'input',
                message: 'What is the department ID?',
                name: 'deptId'
            }
        ])
        .then(answers => {
            db.query('INSERT INTO ROLE (title, salary, department_id) VALUES (?, ?, ?)', [answers.role, answers.salary, answers.deptId], (err, dataRes) => {
                main();
            })
        })
}

function addEmployee(){
    inquirer
        .prompt ([
            {
                type: 'input',
                message: 'What is the employees first name?',
                name: 'firstName'
            },
            {
                type: 'input',
                message: 'What is the employees last name?',
                name: 'lastName'
            },
            {
                type: 'input',
                message: 'Please enter new employee role ID',
                name: 'roleId'
            },
            {
                type: 'input',
                message: 'What is the manager id? (if manager enter NULL)',
                name: 'managerId'
            }
        ])
        .then(answers => {
            db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [answers.firstName, answers.lastName, answers.roleId, answers.managerId], (err, dataRes) => {
                main();
            })
        })
}

function updateRole(){
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Which employee's role would you like to update?",
                name: 'employeeUpdate',
            },
            {
                type: 'input',
                message: 'What role would you like to assign the selected employee?',
                name: 'newRole'
            }
        ])
        .then(answers => {
            db.query('', )
        })
}


function main() {
    inquirer
        .prompt([
        {
            type: 'list',
            message: 'What would you like to choose?',
            name: 'action',
            choices: [
                'view all departments',
                'view all roles',
                'view all employees',
                'add a department',
                'add a role',
                'add an employee',
                'update a employee role'
            ],
        },
    ])
        .then((answers)=> {
        switch (answers.action) {
            case "view all departments":
                db.query("SELECT * FROM department;", (err, dataRes) => {
                    console.table(dataRes);
                    main();
                });
                break;
            case "view all roles":
                db.query("SELECT * FROM role;", (err, dataRes) => {
                    console.table(dataRes);
                    main();
                });
                break;
            case "view all employees":
                db.query("SELECT * FROM employee;", (err, dataRes) => {
                    console.table(dataRes);
                    main();
                });
                break;
            case "add a department":
                addDepartment();
                break;
            case "add a role":
                addRole();
                break;
            case "add an employee":
                addEmployee();
                break;
            case "update a employee role":
                updateRole();
                break;
                default:
                    console.log("Invalid action.");
                    main();
                    break;
            }
        });
}
main()
