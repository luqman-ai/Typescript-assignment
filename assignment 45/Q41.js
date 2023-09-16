var magician1 = ["Joghi", "Bagger", "braywatt"];
var megician_name = function (names) {
    var print = names.forEach((function (n) {
        console.log(n);
    }));
};
var make_magician = function (name1) {
    var modi = [];
    for (var i = 0; i < name1.length; i++) {
        modi.push(name1[i], "the great");
    }
    return modi;
};
var sd = make_magician(magician1);
console.log(sd);
megician_name(magician1);
