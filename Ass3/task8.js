"use strict";
let celsious = [4, 20, 30, 37, 40];
let fahrenheit = [];
let index = 1;
while (index < celsious.length) {
    const fahrenheitConv = (celsious[index] * (9 / 5) + 32);
    fahrenheit.push(fahrenheitConv);
    index += 1;
}
console.log(fahrenheit);
