function factorial(n) {
    if (n < 0) {
        console.log("factorial is not define for negative number");
    }
    else if (n == 0) {
        console.log(1);
    }
    else {
        var num_1 = 1;
        while (n > 0) {
            num_1 *= n;
            n -= 1;
            console.log(num_1);
        }
    }
}
factorial(5);
