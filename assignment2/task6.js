var numb = [3, 6, 9, 12, 15, 18];
var odd = numb.filter(function (n) {
    if (n % 2 != 0) {
        return true;
    }
});
var double = odd.map(function (n) {
    return n * 2;
});
console.log(double);
