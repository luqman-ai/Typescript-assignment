let magician1 = ["Joghi", "Bagger", "braywatt"];
let megician_name = (names) => {
    let print = names.forEach((n => {
        console.log(n);
    }));
};
let make_magician = (name1) => {
    let modi = [];
    for (let i = 0; i < name1.length; i++) {
        modi.push(name1[i], "the great");
    }
    return modi;
};
console.log("original magician:");
megician_name(magician1);
console.log("the great magician:");
let sd1 = make_magician(magician1);
console.log(sd1);
export {};
