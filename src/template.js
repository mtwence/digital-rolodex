const internal = require("stream");

const genTeam = (template) => {
  const genManager = (manager) => {
    return `
            <div class="card employee-card m-1">
            <div class="card-header">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${manager.getOffNum()}</li>
                </ul>
            </div>
        </div>
            `;
  };
  const genEngineer = (engineer) => {
    return `
            <div class="card employee-card m-1">
            <div class="card-header">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-wrench mr-2"></i>${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub Username: ${engineer.getGitHub()}</li>
                </ul>
            </div>
        </div>
            `;
  };
  const genIntern = (intern) => {
    return `
            <div class="card employee-card m-1">
            <div class="card-header">
                <h2 class="card-title">${intern.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-graduation-cap mr-2"></i>${intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
            `;
  };
  const templateHTML = [];
    templateHTML.push(template
        .filter((employee) => employee.getRole() === "Manager")
        .map((manager) => genManager(manager)));
    templateHTML.push(template
            .filter((employee) => employee.getRole() === "Engineer")
            .map((engineer) => genEngineer(engineer)));
    templateHTML.push(template
            .filter((employee) => employee.getRole() === "Intern")
            .map((intern => genIntern(intern))));
        return templateHTML.join("");
};
module.exports = (template) => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>My Team</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
          <link rel="stylesheet" href="style.css">
          <script src="https://kit.fontawesome.com/c502137733.js"></script>
      </head>
      
      <body>
          <div class="container-fluid">
              <div class="row">
                  <div class="col-12 jumbotron mb-3 team-heading">
                      <h1 class="text-center">Mon Équipe</h1>
                  </div>
              </div>
          </div>
          <div class="container">
              <div class="row">
                  <div class="team-area col-12 d-flex justify-content-center">
                      ${genTeam(template)}
                  </div>
              </div>
          </div>
      </body
       `;
  };
  