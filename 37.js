function make_shirt(tshirt_size, message) {
    if (tshirt_size === void 0) { tshirt_size = "Large"; }
    if (message === void 0) { message = "I love TypeScript!"; }
    console.log("Your required T-Shirt size is :" + tshirt_size);
    console.log(message + " will be printed on your T-Shirt.");
}
make_shirt();
make_shirt("Large");
make_shirt("Medium");
make_shirt("Small", "I Love JavaScript!");
