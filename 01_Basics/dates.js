//Dates
let myDate=new Date ()
console.log(myDate.toString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleDateString());
console.log(typeof Date);
console.log(myDate.getFullYear);

let myCreatedDate=new Date (2005,7,3)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp= Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate= new Date;
console.log(newDate.getMonth()+1);
console.log((newDate.getMinutes()));
console.log(newDate.getTime());
//`${}  and${}`

newDate.toLocaleString('default',{weekday:"long"});













