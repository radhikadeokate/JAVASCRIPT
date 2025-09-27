//if statement
// const temp=41
// if(temp>50){
// console.log("Temp is more than 50")
//  }else{
//  console.log("Temp is less than 50")
//  }
// const balance=1000;
// if(balance<500){
// ... (rest of your code)

const userLoggedIn = true
const debitcard = true
const LoggedInfromGoogle=false
const LoggedInfromEmail=true

if(userLoggedIn && debitcard && 2==2){
    console.log("Allow to buy course");
}

if(LoggedInfromEmail||LoggedInfromGoogle){
    console.log("User logged in");
}