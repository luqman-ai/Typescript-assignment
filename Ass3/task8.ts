let celsious:number[]=[4,20,30,37,40]
let fahrenheit:number[]=[]
let index:number = 1
while(index<celsious.length){
    const fahrenheitConv=(celsious[index]*(9/5)+32)
    fahrenheit.push(fahrenheitConv)
    index += 1

}
console.log(fahrenheit)