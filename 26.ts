let alien_color: string[] =["green","yello","red"];
console.log("Alien Colors Game");
console.log(alien_color);
for (let i=0;i<alien_color.length;i++) {

    if (alien_color[i]=="green")
        console.log("alien_color[%d] is green , you earned 5 points",i);
    else 
        console.log("alien_color[%d] is not green , you earned 10 points",i);
}
