const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generateHTML = require('./src/generateHTML');
const team = [];


// main prompt to direct which questions will be asked
const promptMenu = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'menu',
      message: 'Please select an option:',
      choices: ['Add an Engineer', 'Add an Intern', 'My team is complete']
    }])
    .then(menuChoice => {
      switch (menuChoice.menu) {
        case "Add an Engineer":
          promptEngineer();
          break;
        case "Add an Intern":
          promptIntern();
          break;
        case "My team is complete":
          teamComplete();
          break;
      }
    });
};

// prompt list to get information of manager
const promptManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter Manager name',
      validate: name => {
        if (name) {
          return true;
        } else {
          console.log("Please enter Manager name");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter employee ID',
      validate: id => {
        if (id) {
          return true;
        } else {
          console.log("Please enter employee ID");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter employee email',
      validate: email => {
        if (email) {
          return true;
        } else {
          console.log("Please enter employee email");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Please enter employee office number',
      validate: officeNumber => {
        if (officeNumber) {
          return true;
        } else {
          console.log("Please enter employee office number");
          return false;
        }
      }
    },
  ])
  .then(answers => {
    console.log(answers);
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    team.push(manager);
    promptMenu();
  })
};

// prompt list to get information of engineer
const promptEngineer = () => {
  console.log("Engineer function");
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter Engineer name',
      validate: name => {
        if (name) {
          return true;
        } else {
          console.log("Please enter Engineer name");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter employee ID',
      validate: id => {
        if (id) {
          return true;
        } else {
          console.log("Please enter employee ID");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter employee email',
      validate: email => {
        if (email) {
          return true;
        } else {
          console.log("Please enter employee email");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter employee github username',
      validate: github => {
        if (github) {
          return true;
        } else {
          console.log("Please enter employee github username");
          return false;
        }
      }
    },
  ])
  .then(answers => {
    console.log(answers);
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    team.push(engineer);
    promptMenu();
  })
};

// prompt list to get information of Intern
const promptIntern = () => {
  console.log("Intern function");
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter Intern name',
      validate: name => {
        if (name) {
          return true;
        } else {
          console.log("Please enter Intern name");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter employee ID',
      validate: id => {
        if (id) {
          return true;
        } else {
          console.log("Please enter employee ID");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter employee email',
      validate: email => {
        if (email) {
          return true;
        } else {
          console.log("Please enter employee email");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: 'Please enter employee school',
      validate: school => {
        if (school) {
          return true;
        } else {
          console.log("Please enter employee school");
          return false;
        }
      }
    },
  ])
  .then(answers => {
    console.log(answers);
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    team.push(intern);
    promptMenu();
  })
};

//assemble team of managers, engineers, and interns and write to file
const teamComplete = () => {
  console.log(team);
  return inquirer.prompt({
    type: 'confirm',
    name: 'teamConfirm',
    message: 'Is this team complete?'
  })
  .then(answer => {
    if(answer.teamConfirm){   
      fs.writeFile('./dist/index.html',generateHTML(team), (err) => {
        if (err) throw err;
        console.log("writing file");
      })
    } else {
      promptMenu();
    }
  }) 
};

promptManager();