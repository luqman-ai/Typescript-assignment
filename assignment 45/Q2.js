let personName = "Muhammad Luqman Asghar";
let lowerCase = personName.toLowerCase();
let upperCase = personName.toUpperCase();
let titleCase = personName.split(" ").map((l) => l[0].toUpperCase() + l.slice(1).toLowerCase()).join(" ");
console.log("lowerCase", lowerCase);
console.log("upperCase", upperCase);
console.log("titleCase", titleCase);
export {};
