"use strict";
let cTemp = [0, 10, 20, 30, 40];
let fTemp = cTemp.map((conv) => {
    return (conv * (9 / 5) + 32);
});
console.log(fTemp);
