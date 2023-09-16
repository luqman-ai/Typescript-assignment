var users = ["Ahmad", "Hassan", "Saleem", "Shoaib", "Shahzad"];
var new_User = ["Faheem", "Kaseem", "Naveed", "Saleem", "Ahmad"];
var u = new_User.forEach(function (s) {
    var user_Taken = users.some(function (n) { n.toLowerCase() === s.toUpperCase(); });
    if (user_Taken) {
        console.log("Sorry the '".concat(new_User, "' is already taken. Will you need new User name "));
    }
    else {
        console.log("This ".concat(new_User, " is available"));
    }
});
