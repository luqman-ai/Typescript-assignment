var personName = "Muhammad Luqman Asghar";
var lowerCase = personName.toLowerCase();
var upperCase = personName.toUpperCase();
var titleCase = personName.split(" ").map(function (l) { return l[0].toUpperCase() + l.slice(1).toLowerCase(); }).join(" ");
console.log("lowerCase", lowerCase);
console.log("upperCase", upperCase);
console.log("titleCase", titleCase);
