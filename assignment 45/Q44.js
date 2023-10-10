let creat_car = (manufacturer, model, option) => {
    let car = {
        manufacture: manufacturer,
        model: model
    };
    for (let key in option) {
        car[key] = option[key];
    }
    return car;
};
let mcar = creat_car("Toyota", "Camry", ["sunroof", "navigation"]);
console.log(mcar);
export {};
