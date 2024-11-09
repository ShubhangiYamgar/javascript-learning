let fruits_seasonal =["Banana","Orange","Apple","Mango","Water Melon",];

console.log(fruits_seasonal);
console.log("============================================");
// 1. 
console.log("1> log the first and last element on console");
console.log(`First element: ${fruits_seasonal[0]}`);
console.log(`Last element: ${fruits_seasonal[fruits_seasonal.length-1]}`);
console.log("============================================");

// 2 
console.log("2> add element papaya before the element 'banana'");
 
 fruits_seasonal.unshift("Papaya");
 console.log(fruits_seasonal);
 console.log("============================================");

// 3 
console.log("3> remove mango from the array");

fruits_seasonal.splice(4,1);
console.log(fruits_seasonal);
 console.log("============================================");
//4
console.log("4>add element or insert an element 'pineaple' at the last position");

fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);
 console.log("============================================");
//5 splice
console.log("5> insert an element dragon fruit before water melon");

  fruits_seasonal.splice(4,"Water Melon","Dragon Fruit");
  console.log(fruits_seasonal);
 console.log("============================================");
//6 splice 
console.log("6> replace an element orange with kiwi");
fruits_seasonal.splice(2,1,"KIWi");
console.log(fruits_seasonal);
 console.log("============================================");
//7 slice 1,4
console.log(" 7> log the elements starting from index 1 to 4");


const sliceElements = fruits_seasonal.slice(1,4);
console.log(sliceElements);

 console.log("============================================");
//8 slice
console.log("8> only select last 3 elements and log on console use the length property");
const last_three = fruits_seasonal.slice(fruits_seasonal.length-3);
console.log(last_three);
 console.log("============================================");
