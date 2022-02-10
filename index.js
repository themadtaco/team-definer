const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the team manager's name:"
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your employee ID number:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:'
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is your office number?'
        }
    ]);
};

const promptTeam = (teamData) => {
    if (!teamData) {
        teamData = [];
    }
    return inquirer.prompt([
        {
            type: 'list',
            name: 'team',
            message: 'What would you like to do?',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish team']
        }
    ])
}

promptManager()
    .then(promptTeam());