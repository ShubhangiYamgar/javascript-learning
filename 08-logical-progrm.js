console.log("=======WAP to count the even number from the array========");

let array =[10,20,45,30,77,60];
let evenNumCount=0;
for(const element of array){
    if(element%2==0){
        console.log(element);
        evenNumCount=evenNumCount+1;
    }
}

console.log(`Even number count is: ${evenNumCount}`);
console.log("-----------***********------------------");

// 2.
console.log("WAP to Count the vowels including lower and upper cae");

const myLove="I Love Only Javascript";
const vowels="aeiou";
let counterVowels=0;
for (const char of myLove) {
    if(vowels.includes(char.toLowerCase()))
         {
      counterVowels=counterVowels+1;
    } 
}
console.log(myLove);

console.log(`Vowel count is: ${counterVowels}`);
//3.
console.log("wap to count the characters including lower and upper charcter");
const sentence= "JavaScript LANGUAGE";
let countAChar=0;
for (const char of sentence) {
    if(char =='a' || char == 'A'){
        countAChar=countAChar+1;
    }
    /*
    if( char.toUpperCase() == 'A'){
        countAChar=countAChar+1;
    }*/
}
console.log(sentence);

console.log(`total a char is : ${countAChar}`);
