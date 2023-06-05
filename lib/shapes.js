const fs = require('fs');

class Shape {
    generateSVG(data) {
        // Determine the svg code for a given shape choice and assign it to a variable called svgShapeTxt
        let svgShapeTxt;
        if (data.shape == 'Triangle') {
            svgShapeTxt = 'polygon points="150, 18 244, 182 56, 182"';
        } else if (data.shape == 'Circle') {
            svgShapeTxt = 'circle cx="150" cy="100" r="80"';
        } else {
            svgShapeTxt = 'rect width="200" height="200"';
        }
    
        return `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    
        <${svgShapeTxt} fill="${data.shapeColor}"/>
    
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">SVG</text>
        
        </svg>`
    };
    
    render() {
        fs.writeFile('./generatedSVG/logo.svg', this.generateSVG(this), err =>
        err ? console.log(err) : console.log('Generated logo.svg')
        );
        return this.generateSVG(this);
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super();
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super();
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
}

class Square extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super();
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
}

module.exports = {
    Triangle,
    Circle,
    Square
}
