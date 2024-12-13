
id="profileDetails"
console.log("=========== getElementById() with element name =============== ");
const profileDetailsElement = document.getElementById("profileDetails");
console.log(profileDetailsElement);
profileDetailsElement.innerHTML = "My Complete Summary";

console.log("======= Changing an attribute ============");
const gitProfileElement = document.querySelector("#gitProfile");
gitProfileElement.setAttribute('href', "https://github.com/");

profileDetailsElement.style.color = "orange";
profileDetailsElement.style.fontFamily = "Arial";

console.log("======= Creating new node ============");
const paraElement = document.createElement("p");
const paraTextNode = document.createTextNode("My Hobbies: Reading, Writing and Time pass");
paraElement.appendChild(paraTextNode);
paraElement.style.color = "cadetblue";

const hobbiesElement = document.querySelector("#hobbies");
hobbiesElement.appendChild(paraElement);

console.log("======= Remove node ============");
const techULElement = document.querySelector("#tech");
const angularLIElement = document.querySelector("#angular");
techULElement.removeChild(angularLIElement);