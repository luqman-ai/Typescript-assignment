"use strict";
function inValue(odd, index, value) {
    odd.splice(index, 0, value);
    return odd;
}
console.log(inValue([1, 3, 7, 9], 2, 5));
