function findlargestfun(number:number[]){
    let largest:number=number[0]
    for (let i = 0; i < number.length; i++) {
        if (number[i]>largest){
            largest=number[i]
        }
        
    } return largest
}
console.log(findlargestfun([20,60,45,30,35,70,10]))