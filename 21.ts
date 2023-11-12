//Declare Student object type
let student: {
firstName:string,
lastName:string,
batch:string,
dob:string
};
//Assign values to student object
student = {
firstName:"Hamza",
lastName:"Yasir",
dob:"20-Nov-2010",
batch:"51"
};
console.log("Student object:")
console.log(student);
//Updat Student date of birth
student.dob="25-Dec-2010";
console.log("\nStudent object after updating DOB");
console.log(student);
//Declare and assigning values to Employee object type
let employee: {
    firstName:string,
    lastName:string,
    Department:string,
    Salary:number,
    ActiveStatus:boolean
    } = {

        firstName:"Ali",
        lastName:"Khan",
        Department:"IT",
        Salary:500000,
        ActiveStatus:true
    }

console.log("\nEmployee object:")
console.log(employee);
//Update salary of Employee
employee.Salary=600000;
console.log("\nEmployee object after updating Salary:");
console.log(employee);
