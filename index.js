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
    ])
    .then(data => {
        const manager = new Manager(data.name, data.employeeId, data.email, data.office);
        console.log(manager);
    });
};

const promptEngineer = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's ID?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email?"
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's Github"
            }
        ])
        .then(data => {
            const engineer = new Engineer(data.name, data.id, data.email, data.github);
            console.log(engineer);
        });
};

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email?"
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school did the intern attend?'
        }
    ])
    .then(data => {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        console.log(intern);
    })
};

const promptTeam = teamData => {
    if (!teamData) {
        teamData = [];
    }
    return inquirer.prompt(
        {
            type: 'list',
            name: 'team',
            message: 'What would you like to do?',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish team']
        })
        .then(({ team }) => {
            if(team === 'Add an Engineer') {
                promptEngineer();
            } else if(team === 'Add an Intern') {
                promptIntern();
            } else{

            }
        });
}

promptManager()
    .then(promptTeam);