const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const promptMenu = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'menu',
      message: 'Please select an option:',
      choices: ['Add a Manager', 'Add an Engineer', 'Add an Intern', 'My team is complete']
    }])
    .then(menuChoice => {
      switch (menuChoice) {
        case 'Add a Manager':
          promptManager();
          break;
        case 'Add an Engineer':
          promptEngineer();
          break;
        case 'Add an Intern':
          promptIntern();
          break;
        case 'My team is complete':
          //convert all prompts to objects/cards
          break;
      }
    })
}