 //const tinderuser= new object{}//singleton object 

// const tinderUser={}  //non singlton object 
tinderUser.id="1235"
tinderUser.name="Radha"
console.log(tinderUser);

const regulUser ={
email:"radhika@gmail.com",
phnnumber:56633,
    fullname:{
        username:"sdhb",
    }
}
console.log(regulUser.email)

const obj1={1:"A",2:"B"}
const obj2={3:"C",4:"D"}

//const obj3= {obj1,obj2}
console.log(obj3);
//const obj3=Object.assign({},obj1,obj2)
console.log(obj3);
const obj3={...obj1,...obj2}//Spread Method 
console.log(obj3)

const Users=[{
    id:1,
    email:"fgacsh.com"
},
{
    id:1,
    email:"wdash.com"
},
{
    id:1,
    email:"dsdv.com"
},
]
Users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedin'));//checks if value is present or not 
console.log(tinderUser.hasOwnProperty('id'));

const course ={
    coursename:"Javascript",
    price:"599",
    courseinstructor:"Radha"
}
//course.courseinstructor
const{courseinstructor:instructor}=course//{Key:newname}=object...//Destructuring
 //console.log(instructor);

 //json
//  {
//     "name":"ydsgvxh",
//     "mail":"radhika.com",
//     "phn":"5322"
//  }
//  [
//     {},
//     {},
    
//  ]












