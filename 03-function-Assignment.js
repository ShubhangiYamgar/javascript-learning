// 1.
function fun1() {
    console.log("Shubhangi Yamgar");  
}
function fun2() {
    console.log("Good Morning");  
}
fun1();
console.log("------------------------");
fun2();
console.log("------------------------");
// 2
function personalDetails(firstName,lastName,collgeName) {
    console.log("Personal details::");
    console.log(`FirstName: ${firstName}`);
    console.log(`LastName: ${lastName}`);
    console.log(`CollegeName: ${collgeName}`);
}
personalDetails("Shubhangi","Yamgar","SMSMPITR");
console.log("------------------------");

// 3
function addThreevalues(v1,v2,v3) {
    console.log("Addition of values::",v1,v2,v3);
    result=v1+v2+v3;
}
addThreevalues(10.23,600,40);
console.log(result);
console.log("------------------------");
addThreevalues("Hello","Good","Morning");
console.log(result);
