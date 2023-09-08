function skip_Negitive_Number(arr) {
    return arr.filter(function (arr) { return arr >= 0; });
}
console.log(skip_Negitive_Number([2, 0, -4, -3, 6, 5]));
