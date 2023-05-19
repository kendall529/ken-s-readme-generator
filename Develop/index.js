// TODO: Include packages needed for this application
const Inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(`Error in writing ${fileName}`, err) : console.log(`Data successfully written to ${fileName}`));
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
