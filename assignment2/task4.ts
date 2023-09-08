let num:number[]=[1,2,3,4,5,6,7,8,9,10]
let eve = num.filter((data)=>{
    if (data%2 ==0){
        return true
    }
})
let saqure = eve.map((data)=>{
    return data * data
})
console.log(saqure)