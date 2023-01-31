const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
// if output directory does not exist create it
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}

// TODO: Write Code to gather information about the development team members, and render the HTML file.
//engineer type create
const engineerQuestion = [
  {
    type: "input",
    name: "name",
    message: "What is the engineer's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the engineer's id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the engineer's email?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineer's Github username?",
  },
];

//intern type create
const internQuestion = [
  {
    type: "input",
    name: "name",
    message: "What is the intern's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the intern's id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the intern's email?",
  },
  {
    type: "input",
    name: "school",
    message: "What is the intern's school?",
  },
];

// type manager create, and then choose member type
const teamMembers = [];
inquirer
  .prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the manager's name?",
    },
    {
      type: "input",
      name: "managerId",
      message: "What is the manager's id?",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is the manager's email?",
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is the manager's office number?",
    },
  ])
  .then((managerAnswer) => {
    teamMembers.push(
      new Manager(
        managerAnswer.managerName,
        managerAnswer.managerId,
        managerAnswer.managerEmail,
        managerAnswer.managerOfficeNumber
      )
    );

    addEmployee();
  });

const finishBuildingTeam = () => {
  fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
};

//choose emplyee type
const addEmployee = () => {
  inquirer
    .prompt({
      type: "list",
      name: "addEmployeeType",
      message: "Choose an employee type?",
      choices: ["Engineer", "Intern", "Create team now"],
    })
    .then(({ addEmployeeType }) => {
      if (addEmployeeType === "Engineer") {
        inquirer.prompt(engineerQuestion).then((engineerAnswer) => {
          teamMembers.push(
            new Engineer(
              engineerAnswer.name,
              engineerAnswer.id,
              engineerAnswer.email,
              engineerAnswer.github
            )
          );
          addEmployee();
        });
      } else if (addEmployeeType === "Intern") {
        inquirer.prompt(internQuestion).then((internAnswer) => {
          teamMembers.push(
            new Intern(
              internAnswer.name,
              internAnswer.id,
              internAnswer.email,
              internAnswer.school
            )
          );
          addEmployee();
        });
      } else if (addEmployeeType === "Create team now") {
        finishBuildingTeam();
      }
    });
};
