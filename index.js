// includes packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your Github username?",
    name: "Github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "Email",
  },
  {
    type: "input",
    message: "What is your project name?",
    name: "Project",
  },
  {
    type: "input",
    message: "Please write a short description of your project?",
    name: "Description",
  },
  {
    type: "Checkbox",
    message:
      "Please choose a license that is applicable for your project? (Use arrow key to select)",
    name: "License",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "Install",
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "Test",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "Repo",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "Contributing",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log("Generating README File...");
    writeToFile("./dist/README.md", generateMarkdown({ ...response }));
  });
}

// function call to initialize program
init();
