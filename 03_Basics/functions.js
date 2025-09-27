// function syntax demo

function Sayname(){
  console.log("Radhika");
  console.log("Pavitra");
  console.log("Nikita");
}
// Sayname();

function add2number(num1,num2){
  return num1 + num2;
}
const result = add2number(5,6);
console.log("Result:", result);

function userlogininfo(username){
  return `${username} just logged in`;
}
console.log(userlogininfo("Radhika"));

 function calculateCartPrice(val1,val2,...num1){  //rest opeartor...
  return num1
 }
 console.log(calculateCartPrice(100,500,6000,400));
const user={
  username:"Radha",
  price:199
}
function handleObject(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleObject(user)
handleObject({
 username:"Pavitra",
 price:299
})

const mynewArray=[200,500,300]
function returnSecondValue(getArray){
  return getArray[2]
}
console.log(returnSecondValue(mynewArray));
