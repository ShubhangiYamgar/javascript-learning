function stringHandsOn() {
var str="  Hey you are doing good, keep it up  ";
console.log(`1. Given String is: ${str}`);
console.log(`2.length of string: ${str.length}`);
var res=str.trim();
console.log(`3.After trim string is : ${res} and It's length is ${res.length}`);
console.log(`4.First character is ${res.charAt(0)} and Last character is ${res.charAt(res.length-1)}`);
var resValue=res.split(" ");
console.log(`5.Total Words: ${resValue.length}`);
var resultValue=res.indexOf("good");
console.log(`6.Index of good is: ${resultValue}`);

var res7=res.substring(22);
console.log(`7.Substring of index 22: ${res7}`);
console.log(`8.String ends with word "up" is: ${res.endsWith("up")}`);
console.log(`9.String Strarts with "Hey": ${res.startsWith("Hey")}`);

}
stringHandsOn();