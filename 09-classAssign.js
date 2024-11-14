class Vehicle{
 
constructor(name,color,manufacturing_year, company,model){
this.name=name;
this.color=color;
this.manufacturing_year=manufacturing_year;
this.company=company;
this.model=model;
}

details(){
    console.log(`==== Vehicle ${this.name} Details ====== `);
    console.log(`color: ${this.color}, manufacturing_year: ${this.manufacturing_year}, company: ${this.company},model: ${this.model}`);  
}
}
console.log("--------------Vehicle Details-------------------");

const vehicle_Punch = new Vehicle("Punch", "white", 2024, "TATA",1);
vehicle_Punch.details();
const vehicle_i10 = new Vehicle("I10", "Black", 2022, "Hyundai",1);
vehicle_i10.details();
const vehicle_Swift = new Vehicle("Swift", "Red", 2020, "Suzuki",2);
vehicle_Swift.details();
const vehicle_i20 = new Vehicle("I20", "blue", 2024, "Hyundai",1);
vehicle_i20.details();
const vehicle_Kia = new Vehicle("Kia", "white", 2020, "Hyundai",2);
vehicle_Kia.details();

class College{
constructor(clg_name,city,clg_Code,departments){
this.clg_name=clg_name;
this.city=city;
this.clg_Code=clg_Code;
this.departments=departments;
}
display(){
    console.log(`==== College ${this.clg_name} Details ====== `);
        console.log(`City: ${this.city}, college Code: ${this.clg_Code}, Department: ${this.departments}`);  
}
}
console.log("--------------College Details-------------------");

const clg1=new College("SMSMPITR","Akluj",1562,"Engineering");
clg1.display();
const clg2=new College("GreenFinger","Akluj",1472,"Science");
clg2.display();
const clg3=new College("SVERI","Gopalpur",1522,"Engineering");
clg3.display();
const clg4=new College("MIT","Alandi",1572,"Arts");
clg4.display();