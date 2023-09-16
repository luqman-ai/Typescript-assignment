var username = ["admin", "Luqman", "Usman", "Rehman", "Adnan"];
var call = username.forEach((function (n) {
    if (n == "admin") {
        console.log("Hello admin would you like to see a status report");
    }
    else {
        console.log("Hello ".concat(n, ", thank you for loggin again"));
    }
}));
