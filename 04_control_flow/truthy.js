const userEmail=""
if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");   
}

//Falsy Values
// false,0,-0,BigInt 0n,"",null,undefined,NaN

//Truthy Values
// "0",'false'," ",[],{},function(){}

//To check array 
// if(userEmail.length===0){
//     console.log("Array is empty")
// }

//To check object 
// const emptyobj={}
// if(Object.keys(emptyobj).length==0){
//     console.log("Object is empty")
// }

//Nullish coalescing operator(??):null undefined 

let val1;
//val1=5??10
// val1=null??10
//val1=undefined ??15
//console.log(val1)

//Terniary Opertor

//condition? true:false

const iceteaprice=100
iceteaprice>=80 ? console.log("less than 80") : console.log("More than 80")
