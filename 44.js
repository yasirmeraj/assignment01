function make_sandwich() {
    var sandwich = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sandwich[_i] = arguments[_i];
    }
    console.log("The summary of ordered sandwich:");
    for (var i = 0; i < sandwich.length; i++) {
        console.log(sandwich[i]);
    }
}
make_sandwich("Double Egg", "Salad", "Cheese", "Tamato Catchup", "BBQ Sauce");
make_sandwich("Jalapeno Sauce", "Kebab", "Cheese");
make_sandwich();
