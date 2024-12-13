const person = {
    fullName : "Jenny",
    email: "jenny@gmail.com",
    qualification: "BE CSC",
    isMarried: true,
    age: 55,
    city : "Pune",
    pin: 411057,
    country : "India",
    skill: "Angular and React"
}
// const fullName = person.fullName;
// const age = person.age;
// const skill = person.skill;
// const pin = person.pin;
// const isMarried = person.isMarried;

const {fullName, age, skill, pin, isMarried} = person;
console.log(fullName, age, skill, pin, isMarried);
