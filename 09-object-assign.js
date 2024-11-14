console.log("===========1. Create object and add 5 properties  =====================");

let professor ={
    name: "Vijay",
    city: "pune",
    age:50,
    isMarried:true,
    email:"vijay@121.com",
    degree:{
        engineering:"CSE",
        Masters:"CSE",
        PHD:"Adv Computering"
    },
    certificates: ["Hacker Rank Participation","Certificate in IFE course","Certificate in Adv Programming"]
}
console.log(professor);

console.log("=========================5. Add new property totalExperience==================");
professor.totalExperience = "14 Years";
console.log(professor);
console.log(`totalExperience is: ${professor.totalExperience}`);

console.log("====================6. Modify property city=mumbai ===============================");
professor.city="Mumbai";
console.log(professor);

console.log("=====================7.Add one new Certificate -> Oracle Certified at the 2nd index of array ===================");
 professor.certificates.splice( 2,0," Oracle Certified");
const  arrayProf= professor.certificates;
console.log("Professor Certificates::");
for (const element of arrayProf) {
    console.log(element);

}
console.log(professor);

console.log("=================8. Log the last element of the array-> Certificate=======================");

console.log(professor.certificates[professor.certificates.length-1]);

console.log("================9. Traverse the array using for loop==================");
const  arrayProfessor= professor.certificates;
console.log("====================Professor Certificates=======================");
for (const element of arrayProfessor) {
    console.log(element);
    
}
