//Arrays
const myarr=[2,5,6,8,4,3]
console.log(myarr[0]);

//Arrays Methods
console.log(myarr.push(2))
console.log(myarr.pop(6))
console.log(myarr.unshift(9))//add element at first
console.log(myarr.shift())//remove element
console.log(myarr)
console.log(myarr.includes(2));
console.log(myarr.indexOf(3));
const newarr= myarr.join()
console.log(myarr)
console.log(newarr);

//slice And Splice
console.log("A",myarr);
console.log("B",myarr.splice(1,3));

console.log("C",myarr.slice(1,5));

const myarr1=[1,4,2,5,6];
const myarr2=[10,25,52,36];
const nextnum = myarr1.concat(myarr2);
console.log(nextnum);
console.log(...myarr1,...myarr2);

const anotherarr=[1,2,3,[3,5,6,[4,7,8]]];
console.log(anotherarr.flat(Infinity));

console.log(Array.isArray("Radhika"));
console.log(Array.from("Radhika"));
console.log(Array.from({name:"Radhika"}));//interesting 

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));











