"use strict";
let array1 = ["Apple", "Banana", "Cherry", "date", "grape"];
let mod = array1.filter((d) => {
    if (array1.length > 5) {
        return true;
    }
});
console.log(mod);
