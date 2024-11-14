const bankSbi ={
  bankName:"State Bank of India",
  accountNo:12345,
  ifscCode:7654321,
  branch:"Akluj"
}
const bankLocation={
    street:"Chinchwad",
    city:"Pune",
    pin:411062
}
console.log("=====================Clone bankSbi and bankLocation============================");
const newObject = Object.assign({},bankSbi,bankLocation);
// console.log(newObject);
 console.log(`Bank name is: ${bankSbi.bankName}`);
 console.log(`Bank location is: ${bankSbi.accountNo}`);
 console.log(`Bank IFSC code is: ${bankSbi.ifscCode}`);
 console.log(`Bank branch is: ${bankSbi.branch}`);
 console.log(`Bank street is: ${bankLocation.street}`);
 console.log(`Bank city is: ${bankLocation.city}`);
 console.log(`Pincode is: ${bankLocation.pin}`);

 const rateOfInterest ={
    homeLoanInterest: 8,
    personalLoanInterest:10,
    dueInterest:13
 }
 console.log("==========================merge  bankSbi , bankLocation and rateOfInterest");

 const sbiDetails= Object.assign({},newObject,rateOfInterest);
 //console.log(sbiDetails);
 console.log(`Bank name is: ${bankSbi.bankName}`);
 console.log(`Bank location is: ${bankSbi.accountNo}`);
 console.log(`Bank IFSC code is: ${bankSbi.ifscCode}`);
 console.log(`Bank branch is: ${bankSbi.branch}`);
 console.log(`Bank street is: ${bankLocation.street}`);
 console.log(`Bank city is: ${bankLocation.city}`);
 console.log(`Pincode is: ${bankLocation.pin}`);
 console.log(`HomeLoanInterest is: ${rateOfInterest.homeLoanInterest}`);
 console.log(`PersonalLoanInterest is: ${rateOfInterest.personalLoanInterest}`);
 console.log(`DueInterest is: ${rateOfInterest.dueInterest}`);

 console.log("=========Traversing object ==========");
 for (const key in sbiDetails) {
    if (Object.prototype.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`${key}, => ${element}`);
       
    }
 }