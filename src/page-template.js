const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');

// const generateManager = () => {
//     return `
//     <div class="col-4 mt-4">
//         <div class="card h-100">
//             <div class="card-header">
//                 <h3>${Manager.name}</h3>
//                 <h4>Manager</h4><i class="material-icons">content_paste</i>
//             </div>
//             <div class="card-body">
//                 <p class="id">ID: ${Manager.employeeId}</p>
//                 <p class="email">Email: <a href="mailto:${Manager.email}">${Manager.email}</a></p>
//                 <p class="office">Office Number: ${Manager.office}</p>
//             </div>
//         </div>
//     </div>
//     `;
// };

module.exports = teamArr => {

  teamArr.forEach(element => {
    const role = element.getRole();
    console.log(role);

    if (role === 'Manager') {
      
    }
  });
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3"></h1>
          <nav class="flex-row">
          </nav>
        </div>
      </header>
      <main class="container my-5">
            ${teamArr[0]['name']}
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; </h3>
      </footer>
    </body>
    </html>
    `;
};