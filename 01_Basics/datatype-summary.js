//primitive 
// 7 type : Strings,Number,Boolean,null,Undefined,Symbol,BigInt



//Reference(non primitive)
//Arrays ,objects,Functions

//stack(primitive)-copy,heap(non primitive)-Reference(changes in orignal value )
let myname="radhikadotcom"
anothername=myname
anothername="bhaktidotcom"
console.log(myname);
console.log(anothername);

let user1 = {
    email:"radhika@gmail.com",
    upi :"upi@abl"
}
let user2=user1
user2.email="bhakti@gmail.com"
console.log(user1);
console.log(user2);

