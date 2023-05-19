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
    }

];

Inquirer
    .prompt(questions)
    .then((response) => {
        const {title, description, installation, usage, contributing, tests} = response;
        const readmeData = init(title, description, installation, usage, contributing, tests);
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
function init(title, description, installation, usage, contributing, tests) {
    const mdData = `
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
    `;

    return mdData;
}

// Function call to initialize app
init();
