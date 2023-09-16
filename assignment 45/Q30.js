var username = [];
if (username.length == 0) {
    console.log(" we need to find some user");
}
else {
    var call_1 = username.forEach((function (n) {
        if (n == "admin") {
            console.log("Hello admin would you like to see a status report");
        }
        else {
            console.log("Hello ".concat(n, ", thank you for loggin again"));
        }
    }));
}
