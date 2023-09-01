function factorial(n:number){
    if (n<0){
        console.log("factorial is not define for negative number")
    }
    else if(n==0){
        console.log(1) 
    }
    else{
        let num= 1
        while(n>0){
        num *= n
        n -= 1
        console.log(num)
        
        }
    }
}
factorial(5)