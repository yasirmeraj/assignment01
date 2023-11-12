var animals_list = ["Horse", "Cat", "Dog"];
console.log("My favorite animals are:");
for (var i = 0; i < animals_list.length; i++) {
    console.log(animals_list[i]);
}
for (var j = 0; j < animals_list.length; j++) {
    if (animals_list[j] == "Horse") {
        console.log("Horses are smart and loyal animals, but petting a horse is more expensive than Cats and Dogs.");
    }
    else if (animals_list[j] == "Cat") {
        console.log("Cats are smart and beautiful animals, as per the researh petting a cat can relieve your stress and anxiety, further they more cheaper and easier to handle than dogs and horses");
    }
    else if (animals_list[j] == "Dog") {
        console.log("Dogs are smart and loyal animals, as per the researh petting a dog can relieve your stress and anxiety, further they are more intelligent than Cats and Horses, thats why security agencies are effectivetly using dogs in their specific survillance and detection actvities");
    }
}
console.log("\nPetting smart animals like horses, cats and dogs is a good beneficial hobby");
