var make_Shirt1 = function (size, massage) {
    if (size === void 0) { size = "large"; }
    if (massage === void 0) { massage = "I love typescript"; }
    console.log("shirt size is ".concat(size, " and print this massage ").concat(massage));
};
make_Shirt1();
make_Shirt1("medium");
make_Shirt1("small", "typescript is nice");
