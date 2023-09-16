var creat_car = function (manufacturer, model, option) {
    var car = {
        manufacture: manufacturer,
        model: model
    };
    for (var key in option) {
        car[key] = option[key];
    }
    return car;
};
var mcar = creat_car("Toyota", "Camry", ["sunroof", "navigation"]);
console.log(mcar);
