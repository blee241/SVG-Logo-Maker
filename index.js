const { Triangle, Circle, Square } = require('./lib/shapes');
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
            name: 'textColor',
        },
        {
            type: 'list',
            message: questions[2],
            choices: ['Triangle', 'Circle', 'Square'],
            name: 'shape',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'shapeColor',
        },
    ])
    .then((res) => {
        if (res.shape == 'Triangle') {
            const newTriangle = new Triangle(res.text, res.textColor, res.shape, res.shapeColor);
            newTriangle.render();
        } else if (res.shape == 'Circle') {
            const newCircle = new Circle(res.text, res.textColor, res.shape, res.shapeColor);
            newCircle.render();
        } else {
            const newSquare = new Square(res.text, res.textColor, res.shape, res.shapeColor);
            newSquare.render();
        }
    });

    