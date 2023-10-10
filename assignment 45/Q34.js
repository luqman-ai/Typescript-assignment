let animals = ["Goat", "Cow", "Buffalo"];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
for (let i = 0; i < animals.length; i++) {
    switch (animals[i]) {
        case "Goat":
            console.log("Goat is a ver beautiful pet");
            break;
        case "Cow":
            console.log("Cow a good pet");
            break;
        case "Buffalo":
            console.log("Buffalo is a pet");
            break;
        default:
            console.log("these animals very helpful for milk and meet");
            break;
    }
}
console.log(" these animals a good pet");
export {};
