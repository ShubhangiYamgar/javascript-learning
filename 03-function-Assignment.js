// 1.
function fun1() {
    console.log("function one");  
}
function fun2() {
    console.log("function two");  
}
fun1();
fun2();
// 2
function personalDetails(firstName,lastName,collgeName) {
    console.log("Personal details::",firstName,lastName,collgeName);
}
personalDetails("Shubhangi","Yamgar","SMSMPITR");
// 3
function addThreevalues(v1,v2,v3) {
    console.log("values::",v1,v2,v3);
    result=v1+v2+v3;
}
addThreevalues(10.23,600,40);
console.log(result);


addThreevalues("Hello","Good","Morning");