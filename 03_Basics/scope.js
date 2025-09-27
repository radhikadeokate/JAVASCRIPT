let a = 622; // Global a

function myscope(valueFromCall){
    let a = 10;                
    const b = 34;
    console.log("Local a:", a);           
    console.log("Local b:", b);           
    console.log("Passed Value:", valueFromCall); 
}
myscope(a); 

function one(){
   const username="Radhika"
function two(){
    website:"youtube"
   // console.log(username)
}
two()
}
one()
//++++++Interesting++++++++

function addone(num){
return num+1
}
console.log(addone(5))

f