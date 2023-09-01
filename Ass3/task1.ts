function inValue(odd:number[],index:number,value:number): number[] {
    odd.splice(index,0,value)
    return odd
    
}console.log(inValue([1,3,7,9],2,5));