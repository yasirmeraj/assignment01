var alien_color = ["green", "yellow", "red"];
console.log("Alien Colors Game");
console.log(alien_color);
for (var i = 0; i < alien_color.length; i++) {
    if (alien_color[i] == "green")
        console.log("alien_color[%d] is green , you earned 5 points", i);
    else if (alien_color[i] == "yellow")
        console.log("alien_color[%d] is yellow , you earned 10 points", i);
    else if (alien_color[i] == "red")
        console.log("alien_color[%d] is red , you earned 15 points", i);
}
