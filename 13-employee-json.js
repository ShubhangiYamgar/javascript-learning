const employeeData =`{
"name": "Aleix Melon",
"id" : "E00245",
"Role": ["Dev", "DBA"],
"age" :23,
"doj": "11-12-2019",
"married": false,
"address":{
    "street": "32, laham St.",
    "city": "Innsbruck",
    "country": "Austria"
},
"referred-by": "E0012"
}`
console.log(`===== Employee Information =======`);
// console.log(typeof employeeData);
const employeeDataInObjectFormat = JSON.parse(employeeData);
//console.log(typeof employeeDataInObjectFormat);
console.log(employeeDataInObjectFormat);

console.log("--------Employee Role------");
console.log(employeeDataInObjectFormat.role);

console.log("--------Last Name------");
console.log(employeeDataInObjectFormat.name);

console.log("--------Joining Year------");
console.log(employeeDataInObjectFormat.doj);