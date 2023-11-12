let favorite_fruits: string[]=["apple","banana","orange"];

if (favorite_fruits[0]=="apple") 
    console.log("You really like "+favorite_fruits[0]);
 
if (favorite_fruits[1]=="banana") 
    console.log("You really like "+favorite_fruits[1]);

if (favorite_fruits[2]=="orange") 
    console.log("You really like "+favorite_fruits[2]);

if (favorite_fruits.indexOf("avacado")==-1) 
    console.log("We dont have your favorite fruit avacado");

if (favorite_fruits[0].substring(0)=="apple") 
    console.log("You really like "+favorite_fruits[0]);