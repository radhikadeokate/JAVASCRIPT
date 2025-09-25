// Constructor way to declare object=> Object.create

//Object literals

const mysym = Symbol("key1"); 
const jsuser = {
    name: "Radhika",
    [mysym]: "mykey1", // Correct way to use a Symbol as a key
    age: 21,
    Email: "radhikadeokate@gmail.com",
    isLoggedIN: true,
    LastLoggedIn: ["Monday", "Tuesday"]
};

// Accessing properties
console.log(jsuser["Email"]);
console.log(typeof jsuser[mysym]);

// Attempting to change and freeze
jsuser.Email = "radhikadeokate9898@gmail.com";
//Object.freeze(jsuser);

// This change is ignored because the object is now frozen

// jsuser.Email = "radhikadeokate@gmail.com"; 
console.log(jsuser); 
// Shows the state after the first change and before the attempted, failed second change

// Adding a method (function)
jsuser.greeting = function() {
    console.log("Hello js user");
};

jsuser.greetingtwo=function(){
    console.log(`Hello js user,${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());


