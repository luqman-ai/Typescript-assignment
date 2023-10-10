let users = ["Ahmad", "Hassan", "Saleem", "Shoaib", "Shahzad"];
let new_User = ["Faheem", "Kaseem", "Naveed", "Saleem", "Ahmad"];
let u = new_User.forEach((s) => {
    const user_Taken = users.some((n) => { n.toLowerCase() === s.toUpperCase(); });
    if (user_Taken) {
        console.log(`Sorry the '${new_User}' is already taken. Will you need new User name `);
    }
    else {
        console.log(`This ${new_User} is available`);
    }
});
export {};
