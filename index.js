const fs = require('fs');
const inquirer = require('inquirer');
const questions = [
    'Enter up to three characters for your logo.',
    'Enter a color keyword or a hexadecimal number to choose your text color.',
    'Pick a shape for your logo.',
    'Enter a color keyword or a hexadecimal number to choose your shape color.',
];

inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'text',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'text-color',
        },
        {
            type: 'list',
            message: questions[2],
            choices: ['Triangle', 'Circle', 'Rectangle'],
            name: 'shape',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'shape-color',
        },
    ])
    .then((res) => {
        fs.writeFile('./generatedSVG/logo.svg', generateSVG(res), err =>
        err ? console.log(err) : console.log('Generated logo.svg');
        );
    });