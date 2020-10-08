var inquirer = require("inquirer");
var fs = require("fs");
var generateAnswers= require("./readmegen");

var questions =[
    {
        type: "input",
        message: "What is your project title?",
        name: "Title"
    },
    {
        type: "input",
        message: "Describe your project",
        name: "Description"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "Installation"
    },
    {
        type: "input",
        message: "Provide instructions for use.",
        name: "Instructions"
    },
    {
        type: "input",
        message: "Name license",
        name: "License",
        
    },
    {
        type: "input",
        message: "Contributors?",
        name: "Contributors"
    },
    {
        type: "input",
        message: "Contact info for further questions",
        name: "Questions"
    },
    {
        type: "input",
        message: "Your Github username",
        name: "Username"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "Email"
    }
    
];

function writeFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          throw err;
        }
      });
    }

function init() {
    inquirer.prompt(questions).then(answers => {
        
        const response = generateAnswers(answers);
        console.log(answers);
       
        writeFile("README.md", response);
      
    })
    

}

init();
