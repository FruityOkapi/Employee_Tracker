const inquirer = require('inquirer');
const prompt = require('./prompts');

const passwordYN = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'boolean',
            message: "Does MySQL on this system require a password?",
            choices: ['Yes', 'No']
        }
    ])
    .then((answer) => {
        if (answer = 'Yes') {
            passwordRequest();
        } else {
            prompt.initPrompt();
        }
    });
};

const passwordRequest = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'password',
            message: "Please enter your MySQL password"
        }
    ])
    .then((answer) => {
        mysqlPassword = answer.password;
        prompt.initPrompt();
    })
};

module.exports = {passwordYN, passwordRequest}