const shapes = require('./shapes.js');

describe('The shape class constructors', () => {
    describe('given the triangle input', () => {
        it('should create a blue triangle', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
    describe('given the circle input', () => {
        it('should create a red circle', () => {
            const shape = new Circle();
            shape.setColor("red");
            expect(shape.render()).toEqual('circle cx="150" cy="100" r="80" fill="red" />');
        });
    });
    describe('given the rectangle input', () => {
        it('should create a green rectangle', () => {
            const shape = new Rectangle();
            shape.setColor("green");
            expect(shape.render()).toEqual('<rect width="300" height="200" fill="green" />');
        });
    });
});

