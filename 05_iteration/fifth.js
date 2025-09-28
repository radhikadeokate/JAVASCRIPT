const myarr=["js","rb","cpp","java","python"]

// myarr.forEach( function (item) {
//     console.log(item);
// } )

// myarr.forEach((val) => {
//     console.log(val);
    
// })

const coding=[{
    languageName:"Java",
    languageFileName:"Java "
},
{
    languageName:"JavaScript",
    languageFileName:"JS"
},
{
    languageName:"Cpp",
    languageFileName:"C++"
}]
coding.forEach( (item) => {
    console.log(item.languageFileName); 
})
