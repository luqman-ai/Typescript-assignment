var negtiveN = function (array) {
    var n = array.filter(function (nu) {
        if (nu >= 0) {
            return nu;
        }
    });
    return n;
};
console.log(negtiveN([-2, -4, 2, 4, -3, -1, 0, 1, 5, 3]));
