let favorite_pizzas:string[]=["Veggie","Chicken Zinger","BBQ Chicken"];
console.log("My favorite pizzas:");
console.log(favorite_pizzas);
for (let i=0;i<favorite_pizzas.length;i++) {
    if(favorite_pizzas[i].toLowerCase()=="Veggie".toLowerCase())
        console.log("\nI love to eat "+favorite_pizzas[i]+" pizza!");
    else if (favorite_pizzas[i].toLowerCase()=="Chicken Zinger".toLowerCase())
        console.log("\n"+favorite_pizzas[i]+" pizza is my super favorite!");
    else if (favorite_pizzas[i].toLowerCase()=="BBQ Chicken".toLowerCase()) 
        console.log("\nI like "+favorite_pizzas[i]+" pizza!");
}   

console.log ("\nI like to eat pizza's atlest once a week.");
console.log ("My favorite pizzas are "+favorite_pizzas[0]+","+favorite_pizzas[1]+",and "+favorite_pizzas[2]+".");
console.log("I really love pizzas!");


