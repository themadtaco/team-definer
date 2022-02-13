const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHtml =  require('./src/page-template');

let teamArr = [];

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
        teamArr.push(manager);
        console.log(teamArr);
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
            teamArr.push(engineer);
            console.log('Engineer added!');
            promptTeam();
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
        teamArr.push(intern);
        console.log('Intern added!');
        promptTeam();
    })
};

const promptTeam = () => {
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
                return teamArr;
            };
        });
}

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else{
            console.log("Your team has been created!");
        }
    })
}

promptManager()
    .then(promptTeam)
    .then(teamArr => {
        return generateHtml(teamArr);
    })
    .then(pageHtml => {
        return writeFile(pageHtml);
    });