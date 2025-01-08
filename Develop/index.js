// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input', //what kind of data will be passed in, in this case we use input as we will be typing all our answers in
        name: 'title', //creates a name key for this response
        message: 'What is the title of your project?' //question to be asked
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the main purpose or problem the project solves?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is the project used?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What type of license does the project have? (for example, MIT, Apache, GPL)'
    },
    {
        type: 'input',
        name: 'contact',
        message: 'What is your GitHub username?'
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // creates the new file and leaves a motivational console log
    fs.writeFile(fileName, data, () => {
        console.log('README file created! Good luck on the project! I believe in you!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const readmeContent = generateMarkdown(answers); //uses generateMarkdown function from generateMarkdown.js to create README
            writeToFile('README.md', readmeContent); //writes generated content to the file
        });
}

// Function call to initialize app
init();
