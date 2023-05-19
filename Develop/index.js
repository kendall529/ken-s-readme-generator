// TODO: Include packages needed for this application
const Inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a brief description of the project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'Apache', 'GNU', 'None'],
    },


];

Inquirer
    .prompt(questions)
    .then((response) => {
        const {title, description, installation, usage, contributing, tests, license} = response;
        const readmeData = init(title, description, installation, usage, contributing, tests, license);
        writeToFile('README.md', readmeData);
    })
    .catch((error) => {
        console.error('Error', error);
    });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(`Error in writing ${fileName}`, err) : console.log(`Data successfully written to ${fileName}`));
}

// TODO: Create a function to initialize app
function init(title, description, installation, usage, contributing, tests, license) {

    const mdData = `
    ${getLicenseBadge(license)}
    # Title

    ${title}

    
    ## Description

    ${description}
    
    ## Installation

    ${installation}

    ## Usage

    ${usage}

    ## Contributing

    ${contributing}

    ## Tests

    ${tests}

    ## License

    This application is license by ${license}. 
    `;

    return mdData;
}

function getLicenseBadge(license) {
    // Map license names to their corresponding badge URLs
    const licenseBadges = {
        MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        GNU: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    };
  
    return licenseBadges[license] || '';
  }

// Function call to initialize app
init();
