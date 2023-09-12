var guest3 = ["Shahid", "Abu Huraira", "Zafar"];
// // let invitation=guest.forEach((n)=>{
// //     console.log(n,"!  I invit to dinner in my home today")
// // })
// guest1.splice(1,1,"Tanveer")
// let invitation1=guest1.forEach((n)=>{
//          console.log(n,"!  I invit to dinner in my home today")
//      })
console.log("orignal Guest list", guest3);
guest3.unshift("Kashif");
guest3.splice(1, 0, "Subhan");
guest3.push("Ali");
console.log("updated Guest list", guest3);
var invitation2 = guest3.forEach(function (n) {
    console.log(n, "!  I invit to dinner in my home today");
});
