let username:string[]=[]
if(username.length==0){
    console.log(" we need to find some user")
}
else{
let call=username.forEach((n=>{
    if(n=="admin"){
        console.log("Hello admin would you like to see a status report")
    }
    else {
        console.log(`Hello ${n}, thank you for loggin again`)
    }
}))}