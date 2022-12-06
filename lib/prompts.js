const inquirer = require('inquirer');
const { up } = require('inquirer/lib/utils/readline');


const initList = ['View all Departments','View all Roles', 'View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update Employee'];



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
            break;
        case initList[6]:
            updateEmployee();
    }
  }); 
};

const viewDepartment = () => {}

const viewRoles = () => {}

const viewEmployees = () => {}

const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: 'What is the name of the new department?'
        }
    ])
    .then((userInput) => {

    })
}

const addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'roleName',
            message:'What is the name of the new role?'
        },
        {
            type: 'input',
            name: 'roleSalary',
            message:'What is the salary of the new role?',

        }
    ])
    .then((userInput) => {

    })
}

const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message:"What is the new employee's first name?",
        },
        {
            type: 'input',
            name: 'lastName',
            message: "What is the new employee's last name?",
        },
        {
            type: 'input',
            name: 'role',
            message:'What is the position of the new employee?',
        },
        {
            type: '',
            name: '',
            message:'',
        }
    ])
}

const updateEmployee = () => {}