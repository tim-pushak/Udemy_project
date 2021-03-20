"use strict";


// (47) Classes ES6

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectabgleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}

const div = new ColoredRectabgleWithText(10, 30, 'Hello World', 'red');
div.showMyProps();

console.log(div.calcArea());


const square = new Rectangle(10, 10);
const newSquare = new Rectangle(20, 100);


console.log(square.calcArea());
console.log(newSquare.calcArea());