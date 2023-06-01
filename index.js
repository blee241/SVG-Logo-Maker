const fs = require('fs');
const inquirer = require('inquirer');
const questions = [''];

inquirer
    .prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'Which shape would you like in your logo?',
            choices: ['Triangle', 'Circle', 'Square']
        },

    ])