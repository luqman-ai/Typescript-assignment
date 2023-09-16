let creat_car=(manufacturer:string,model:string,option:{[key:string]: any})=>{
    type cartype={ manufacture:string;model:string; [key:string]: any}
 let car:cartype={
    manufacture:manufacturer,
    model:model
 };
 for(let key in option){
    car[key]=option[key]
 }
 return car;
}

let mcar=creat_car("Toyota","Camry",["sunroof","navigation"])
console.log(mcar)