
function squareOfWordLength(givenString) {
   var givenStringLength = givenString.length;
  var  result= givenStringLength * givenStringLength;
  return result;
}
var returnValue= squareOfWordLength("Javascript");
var returnValue2= squareOfWordLength("Google chrome");
var returnValue3= squareOfWordLength("Web Developer Smart");
console.log("----------------------------  1  --------------------------------------");
console.log(`Given String is: Javascript and its length Square is: ${returnValue}`);
console.log(`Given String is: Google Chrome and its length Square is: ${returnValue2}`);
console.log(`Given String is: Web Developer Smart and its length Square is: ${returnValue3}`);
console.log("----------------------------  2  ------------------------------------------");
 
function stringOperation(givenString) {
    var strLength = givenString.length;
    var words = givenString.split(" ");
    var totalwords = words.length;
    console.log(`Given String is: ${givenString}`);
    
    var strDivision = strLength / totalwords;
    console.log(`String length is: ${strLength} and Division of total words in that String is: ${strDivision}`);
    
    var strMultiply = strLength * totalwords;
    console.log(`String length is: ${strLength} and Multiplication of total words in that String is: ${strMultiply}`);
}
stringOperation("I am Angular Developer");