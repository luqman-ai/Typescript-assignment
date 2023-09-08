var celsious = [4, 20, 30, 37, 40];
var fahrenheit = [];
var index = 1;
while (index < celsious.length) {
    var fahrenheitConv = (celsious[index] * (9 / 5) + 32);
    fahrenheit.push(fahrenheitConv);
    index += 1;
}
console.log(fahrenheit);
