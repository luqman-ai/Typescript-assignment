"use strict";
let numb = [3, 6, 9, 12, 15, 18];
let odd = numb.filter((n) => {
    if (n % 2 != 0) {
        return true;
    }
});
let double = odd.map((n) => {
    return n * 2;
});
console.log(double);
