"use strict";
function sum_Number(number) {
    let sum = 0;
    let num = 0;
    while (num < number.length) {
        sum += number[num];
        num++;
    }
    return sum;
}
console.log(sum_Number([2, 4, 10, 25]));
