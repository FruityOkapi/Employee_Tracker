const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employees_db'
});

const initList = ['View all Departments','View all Roles', 'View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee'];


const initPrompt = () => {
  inquirer.prompt([
    {
        type: 'list',
        name: 'initAnswer',
        message: 'What would you like to do?',
        choices: initList,
    }
  ]).then((userInput) => {
    let grabAnswer = (x) => x.initAnswer;
    switch (grabAnswer(userInput)) {
        case initList[0]:
            viewDepartment();
            break;
        case initList[1]:
            viewRoles();
            break;
        case initList[2]:
            viewEmployees();
            break;
        case initList[3]:
            addDepartment();
            break;
        case initList[4]:
            addRole();
            break;
        case initList[5]:
            addEmployee();
    }
  }); 
};

const viewDepartment = () => {
    db.promise().query('SELECT * FROM department;')
    .then(([rows, fields]) => {
        let table = cTable.getTable('Departments', rows);
        console.log('\n\n');
        console.log(table);
    })
    .then(() => {
        initPrompt();
    })
    .catch(console.log);
};

const viewRoles = async () => {
    db.promise().query('SELECT * FROM role;')
    .then(([rows, fields]) => {
        let table = cTable.getTable('Roles', rows);
        console.log('\n\n');
        console.log(table);
    })
    .then(() => {
        initPrompt();
    })
    .catch(console.log);
};

const viewEmployees = () => {
    db.promise().query('SELECT * FROM employee;')
    .then(([rows, fields]) => {
        let table = cTable.getTable('Employees', rows);
        console.log('\n\n');
        console.log(table);
    })
    .then(() => {
        initPrompt();
    })
    .catch(console.log);
};

const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'id',
            message: "Please enter the corresponding ID",
            validate(x) {
                let check = parseInt(x)
                if(typeof check != 'number') {
                    return "Please enter a valid salary!";
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the new department?',
            validate(x) {
                if (!x.trim().length) {
                    return "Please enter the name of the department!"
                } else {
                    return true;
                }
            }
        }
    ])
    .then((answer) => {
        const {id, name} = answer;
        let parsedId = parseInt(id);
        const parameters = [parsedId, name];
        const sql = `INSERT INTO department (id, name)
        VALUES (?,?)`;
        db.promise().query(sql, parameters)
        .then(() => {
            viewDepartment();
        })
        .catch(console.log)
    });
};


const addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'id',
            message: "Please enter the corresponding ID",
            validate(x) {
                let check = parseInt(x)
                if(typeof check != 'number') {
                    return "Please enter a valid salary!";
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'title',
            message:'What is the name of the new role?',
            validate(x) {
                if (!x.trim().length) {
                    return "Please enter the name of the role!"
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'salary',
            message:'What is the salary of the new role?',
            validate(x) {
                let check = parseInt(x)
                if(typeof check != 'number') {
                    return "Please enter a valid salary!";
                }
                return true;
            }

        },
        {
            type: 'input',
            name: 'department_id',
            message: "Please enter the department this role is under",
        }
    ])
    .then((userInput) => {
        const {id, title, salary, department_id} = userInput;
        const sql = `INSERT INTO role (id, title, salary, department_id) 
        VALUES (?,?,?,?)`;
        const parameters = [id, title, salary, department_id];
        db.promise().query(sql, parameters)
        .then(() => {viewRoles();}).catch(console.log);
        });
};

const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'id',
            message: "Please enter the corresponding ID",
            validate(x) {
                let check = parseInt(x)
                if(typeof check != 'number') {
                    return "Please enter a valid salary!";
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'first_name',
            message:"What is the new employee's first name?",
            validate(x) {
                if (!x.trim().length) {
                    return "Please enter thier first name!"
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'last_name',
            message: "What is the new employee's last name?",
            validate(x) {
                if (!x.trim().length) {
                    return "Please enter their last name!"
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'role_id',
            message:'What is the role of the new employee?',
            validate(x) {
                if (!x.trim().length) {
                    return "Please enter the name of the employee's role!"
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'manager_id',
            message: "If the employee has a manager, enter the manager's ID. If not type 'N/A'.",
            validate(x) {
                let check = parseInt(x);
                if (typeof check != 'number' && x !== 'N/A') {
                    return "Please enter an ID or 'N/A'";
                } else if (typeof check == 'number') {
                    return true;
                } else if (x = 'N/A'){
                    return true;
                }
            },
            filter(x) {
                let check = parseInt(x);
                if (x == 'N/A') {
                    return null;
                } else if (typeof check == 'number') {
                    return x;
                }
            }
        }
    ])
    .then((userInput) =>{
        const {id, first_name, last_name, role_id, manager_id} = userInput;
        const sql = `INSERT INTO employee(id, first_name, last_name, role_id, manager_id) 
        VALUES (?,?,?,?,?)`;
        const parameters = [id, first_name, last_name, role_id, manager_id];
        db.promise().query(sql, parameters)
        .then(() => {viewEmployees();})
        .catch(console.log);
    })
};

module.exports = {
    db,
    initPrompt,
    initList,
    viewDepartment,
    viewRoles,
    viewEmployees,
    addDepartment,
    addEmployee,
    addRole
};