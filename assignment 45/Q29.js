let username = ["admin", "Luqman", "Usman", "Rehman", "Adnan"];
let call = username.forEach((n => {
    if (n == "admin") {
        console.log("Hello admin would you like to see a status report");
    }
    else {
        console.log(`Hello ${n}, thank you for loggin again`);
    }
}));
export {};
