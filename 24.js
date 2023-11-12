var num1 = 10;
var num2 = 30;
var result = 15;
var countries = ["Pakistan", "China", "Afganistan", "Russia"];
console.log("Is countries[0]==\"Pakistan\"");
if (countries[0] == "Pakistan")
    console.log(countries[0] == "Pakistan");
console.log("Is countries[0]!=\"India\"");
if (countries[0] != "India")
    console.log(countries[0] != "India");
console.log("Is countries[2].toLowerCase()==\"Afganistan\".toLowerCase()");
if (countries[2].toLowerCase() == "Afganistan".toLowerCase())
    console.log(countries[2].toLowerCase() == "Afganistan".toLowerCase());
console.log("if num1>=num2 else if num2>=num1");
if (num1 >= num2)
    console.log("num1>=num2:" + (num1 >= num2));
else if (num2 >= num1)
    console.log("num2>=num1:" + (num2 >= num1));
console.log("and (&&) or (||) operators");
if (num1 >= 5 && num1 <= 30)
    console.log("num1:{%d} is in range between 5 and 30", num1, (num1 >= 5 && num1 <= 30));
if (num1 >= 30 || num2 <= 30)
    console.log("num2<=30:" + (num1 >= 30 || num2 <= 30));
console.log("\nTest country name in countries array");
console.log(countries);
if (countries.indexOf("India") == -1)
    console.log("India does not exist in conuntries Array");
if (countries.indexOf("Russia") == -1)
    console.log("Russia does not exist in conuntries Array");
else if (countries.indexOf("Russia") != -1)
    console.log("Russia exists in conuntries Array");
