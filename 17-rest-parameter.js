function multiply(n1,...n2) {
    console.log(n1,n2);
    
}
multiply(4,5,6);
multiply(9,10);
multiply(90);
multiply(2,4,1,10);
console.log("-----------------------------------");

function divide(x,y=1) {
    console.log(x/y);
}
divide(20,10);
divide(5);
console.log("-------------------------------------");

// const person={
//     first_name:"Akshay",
//     age:25,
//     grad:"BE"
// }
//before ES6 assigning object properties to variables
let first_name=person.first_name;
//let age=person.age;
console.log(first_name,age);//akshay 25

const person={
    fullName: "Akshay Yadav",
    age:45,
    isMarried:true
}
let{ fullName , age} =person;
console.log(fullName,age);
