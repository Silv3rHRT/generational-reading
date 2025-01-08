// TODO: Include packages needed for this application
import fs from 'fs'; // File System module to write files
import inquirer from 'inquirer'; // Inquirer module for user promp
import generateMarkdown from './utils/generateMarkdown.js'; // Import the generateMarkdown function from the utils folder

//Create an array of questions for user input
const questions = [
    {
        type: 'input', // Specifies the type of question (input means the user will type a response)
        name: 'title', // Key name for the answer to this question
        message: 'What is the title of your project?' // The question presented to the user
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

// function to write README file
function writeToFile(fileName, data) {
    // Writes the data to a file with the given file name (file name is added below in the init fuction)
    fs.writeFile(fileName, data, () => {
        // Logs success message when file is written
        console.log('README file created! Good luck on the project! I believe in you!')
    });
}

// TODO: Create a function to initialize app
function init() {
    // Prompts the user with the array of questions
    inquirer.prompt(questions)
        .then((answers) => {
            //generates the README content using the user's answers
            const readmeContent = generateMarkdown(answers); 
            //Writes the generated content to the README.md (this is also where the above fs.writefile gets the fileName to create)
            writeToFile('README.md', readmeContent);
        });
}

// Function call to initialize app
init();
