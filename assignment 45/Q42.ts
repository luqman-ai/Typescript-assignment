let magician1:string[]=["Joghi","Bagger","braywatt"]
let megician_name=(names:string[])=>{
    let print=names.forEach((n=>{
        console.log(n)
    }))
}

let make_magician=(name1:string[])=>{
    let modi:string[]=[]
for (let i = 0; i < name1.length; i++) {
    modi.push(name1[i],"the great")
    
}
     return modi;
    
    }
    console.log("original magician:")
    megician_name(magician1)
    console.log("the great magician:")
let sd1=make_magician(magician1)
console.log(sd1)

