var array1 = ["Apple", "Banana", "Cherry", "date", "grape"];
var mod = array1.filter(function (d) {
    if (array1.length > 5) {
        return true;
    }
});
console.log(mod);
