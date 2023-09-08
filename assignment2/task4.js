var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var eve = num.filter(function (data) {
    if (data % 2 == 0) {
        return true;
    }
});
var saqure = eve.map(function (data) {
    return data * data;
});
console.log(saqure);
