const fs = require('fs');
const inquirer = require('inquirer');
const questions = [
    'Enter up to three characters for your logo.',
    'Enter a color keyword or a hexadecimal number to choose your text color.',
    'Pick a shape for your logo.',
    'Enter a color keyword or a hexadecimal number to choose your shape color.',
];

const generateSVG = data => {
    // Determine the svg code for a given shape choice and assign it to a variable called svgShapeTxt
    let svgShapeTxt;
    if (data.shape == 'Triangle') {
        svgShapeTxt = 'polygon points="150, 18 244, 182 56, 182"';
    } else if (data.shape == 'Circle') {
        svgShapeTxt = 'circle cx="150" cy="100" r="80"';
    } else {
        svgShapeTxt = 'rect width="300" height="200"';
    }

    return `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

    <${svgShapeTxt} fill="${data.shapeColor}"/>

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">SVG</text>
    
    </svg>`
};

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
            name: 'textColor',
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
            name: 'shapeColor',
        },
    ])
    .then((res) => {
        fs.writeFile('./generatedSVG/logo.svg', generateSVG(res), err =>
        err ? console.log(err) : console.log('Generated logo.svg')
        );
    });

    