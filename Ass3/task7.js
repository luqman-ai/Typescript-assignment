function sum_Number(number) {
    var sum = 0;
    var num = 0;
    while (num < number.length) {
        sum += number[num];
        num++;
    }
    return sum;
}
console.log(sum_Number([2, 4, 10, 25]));
