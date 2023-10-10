function calculate(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 == 0) {
            sum = sum + number[i];
        }
    }
    console.log(sum);
}
calculate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
export {};
