let updatedlist:string[]=["Kashif","Subhan","Shahid","Abu Huraira","Zafar","Ali"]
while(updatedlist.length>2){

    let newList=updatedlist.pop()
    console.log{`${newList},"i am realy sorry of shrinking my dinner table"`};

}
let inv=updatedlist.forEach((n)=>{
    console.log(n,"your still invited")

})
updatedlist.pop()
updatedlist.pop()
console.log("empty list",updatedlist)