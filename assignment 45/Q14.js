var guest1 = ["Shahid", "Abu Huraira", "Butt Sab"];
// let invitation=guest.forEach((n)=>{
//     console.log(n,"!  I invit to dinner in my home today")
// })
guest1.splice(1, 1, "Tanveer");
var invitation1 = guest1.forEach(function (n) {
    console.log(n, "!  I invit to dinner in my home today");
});
