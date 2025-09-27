const user={
    username:"Rd",
    price:999,
    welcomeMessage:function(){
       // console.log(`${this.username},Welcome to Website`)
//console.log(this);

 }
}
// user.welcomeMessage()
// user.username="PP"
// user.welcomeMessage()
//console.log(this)

// function chai(){
//     let usrname ="Radhika"
//     console.log(this)
// }
// chai()

const chai=()=>{
    let username="Rd"
    console.log(this); 
}
//chai()

// Arrows Syntax => (parameters)=>{}
    const sub2num=(num1,num2)=>{
     //   return num2-num1
    }
   // console.log(sub2num(5,8));

 //Explicit Return- curly braces used use return

 // Implicit Return-No Return 
 
 const addtwo =(num3,num4)=> num3+num4
console.log(addtwo(5,9));
