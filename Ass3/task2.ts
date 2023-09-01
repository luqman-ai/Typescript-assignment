function shoppingcart(cart:any[],add:any,remove:number,update:any){
 if(typeof add == "string"){
    cart.splice(1,remove,add)
    return cart
 }
 else{
    cart.splice(1,remove,update)
    return cart
 }
}
console.log(shoppingcart(["Milk,1","Tea,2","Sugar,1"],"Coffe,2",1,0))
console.log(shoppingcart(["Tea,1","sugar,1","Salt,1/2"],0,1,"Sugar ,0"))