const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');

const generateManager = (manager) => {
    return `
      <div class="column">
        <div class="card">
          <header class="card-header is-dark">
            <p class="card-header-title">
              Manager - ${manager.getName()}
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              Id: ${manager.getId()}<br>
              Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a><br>
              Office: ${manager.getOffice()}<br>
            </div>
          </div>
        </div>
      </div>
    `;
};

const generateEngineer = (engineer) => {
  return `
  <div class="column">
    <div class="card">
      <header class="card-header is-primary">
        <p class="card-header-title">
          Engineer - ${engineer.getName()}
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          Id: ${engineer.getId()}<br>
          Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a><br>
          Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a><br>
        </div>
      </div>
    </div>
  </div>
    `;
};

const generateIntern = (intern) => {
  return `
      <div class="column">
        <div class="card">
          <header class="card-header is-primary">
            <p class="card-header-title">
              Intern - ${intern.getName()}
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              Id: ${intern.getId()}<br>
              Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a><br>
              School: ${intern.getSchool()}<br>
            </div>
          </div>
        </div>
      </div>
  `;
};

module.exports = teamArr => {

  let managers = [];
  let interns = [];
  let engineers = [];


  // loops through team array and seperates them by role into seperate arrays
  teamArr.forEach(element => {
    const role = element.getRole();
    console.log(role);

    if (role === 'Manager') {
      const manager =  generateManager(element);
      managers.push(manager);
    } else if(role === 'Intern') {
      const intern = generateIntern(element);
      interns.push(intern);
    } else {
      const engineer = generateEngineer(element);
      engineers.push(engineer);
    }
  });
    return `
    <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Your Team Has Arrived!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>

    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <h1 class="title">Meet Your Team!</h1>
        </a>
    
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>

  <section class="section">
    <div class="columns">
      ${managers}
      ${interns.join('')}
      ${engineers.join('')}
    </div>
  </section>
  </body>
</html>
    `;
};