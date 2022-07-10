const generateHTML = (team) => {
  //array to hold all employee cards
  const employeeCards = [];

  //creates cards for employee type and pushes to employeeCards
  const managerCard = (manager) => {
    let managerHTML = `
    <div class="card">
      <div class="card-header">
        <p>${manager.name}<p>
        <p><span><i class="fa-solid fa-mug-hot"></i></span>Manager</p>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${manager.id}</li>
          <li class="list-group-item">Email:<span id="email"><a href="mailto: ${manager.email}"> ${manager.email}</a></span></li>
          <li class="list-group-item">Office Number: <br>${manager.officeNumber}</li>
        </ul>
      </div>
    </div>
    `;
    employeeCards.push(managerHTML);
  };

  const engineerCard = (engineer) => {
    let engineerHTML = `
    <div class="card">
      <div class="card-header">
        <p>${engineer.name}<p>
        <p><span><i class="fa-solid fa-glasses"></i></span>Engineer</p>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${engineer.id}</li>
          <li class="list-group-item">Email:<span id="email"><a href="mailto: ${engineer.email}"> ${engineer.email}</a></span></li>
          <li class="list-group-item">github: <a href="https://github.com/${engineer.github}"</a>${engineer.github}</li>
        </ul>
      </div>
    </div>
    `;
    employeeCards.push(engineerHTML);
  };

  const internCard = (intern) => {
    let internHTML = `
    <div class="card">
      <div class="card-header">
        <p>${intern.name}<p>
        <p><span><i class="fa-solid fa-graduation-cap"></i></span>Intern</p>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${intern.id}</li>
          <li class="list-group-item">Email:<span id="email"><a href="mailto: ${intern.email}"> ${intern.email}</a></span></li>
          <li class="list-group-item">School: ${intern.school}</li>
        </ul>
      </div>
    </div>
    `;
    employeeCards.push(internHTML);
  };

  console.log(team);
  for(let i = 0; i <team.length; i++) {
    if(team[i].getRole() === "Manager"){
      managerCard(team[i]);
    } else if(team[i].getRole() === "Engineer") {
      engineerCard(team[i]);
    } else if(team[i].getRole() === "Intern") {
      internCard(team[i]);
    } else {
      console.log("invalid role");
    }
  };

  return employeeCards.join("");
}

module.exports = team => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/bfe2a80c2b.js" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="./style.css" />
      <title>Team Profile Generator</title>
  </head>

  <body>

    <header>
      <h1> My Team </h1>
    </header>
    
    <main>
      ${generateHTML(team)}
    </main>
    
  </body>
  </html>
  `;
};

  

