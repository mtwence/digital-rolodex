const inquirer = require("inquirer");
const fs = require("fs");
const createHTML = require("./src/createHTML");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const emptyArr = [];

function initiate (){
    managerQuestions();
}

function managerQuestions (){
    const questions = [
        {
            type: "input",
            name: "name", 
            message: "Enter the name of this team's manager.",
        },
        {
            type: "input",
            name: "id",
            message: "Enter the ID for your manager.",
        },
        {
            type: "input",
            name: "email",
            message: "Enter the email for your manager.",
        },
        {
            type: "input",
            name: "officeNum",
            message: "Enter the manager's office number",
        },
    ]; 
    inquirer.prompt(questions).then((answers) => {
        const managerInfo = new Manager (
            answers.name,
            answers.id,
            answers.email,
            answers.officeNum,
        );
           emptyArr.push(managerInfo);
           createEmployee();
        });     
}
function createEmployee() {
    const newEmployeeQuest = [
        {
           type: "list",
            name: "type",
            message: "Would you like to add an intern or an engineer to this team?",
            choices: ["Engineer", "Intern", "I do not want to add a team member",],

        }
    ];
    inquirer.prompt(newEmployeeQuest).then ((answers) => {
        if (answers.type === "Engineer") {
            engineerQuestions();
         } 
         else if (answers.type === "Intern") {
            internQuestions();
         }else {
            // something has to happen here but not sure what 
         }
        });
} 