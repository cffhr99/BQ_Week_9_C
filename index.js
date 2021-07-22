const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the project title?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a title to continue!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "A description of your project: ",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to provide a project description!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "How is the software installed?",
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You need to provide installation info to continue!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "What is this project usage for?",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You need to provide information on how to use project!');
                return false;
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Mozilla Public License 2.0",
            "Apache License 2.0",
            "MIT License",
            "Boost Software License 1.0",
            'The Unlicense'
        ],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('You must pick a license for the project!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contributions",
        message: "Who are the contributors of this project?",
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('You need to provide information on how to contribute to the project!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "test",
        message: "How to test the project?",
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('You need to describe how to test this project!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "questions",
        message: "Any questions ? ",
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    }
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Success! Information transferred to the README!')
    });
};

  

function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            writeToFile("exampleReadme.md",generateMarkdown(answers))

        })
}

  init(); 