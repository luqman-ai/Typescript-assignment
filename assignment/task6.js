function findlargestfun(number) {
    var largest = number[0];
    for (var i = 0; i < number.length; i++) {
        if (number[i] > largest) {
            largest = number[i];
        }
    }
    return largest;
}
console.log(findlargestfun([20, 60, 45, 30, 35, 70, 10]));
