function make_shirt(tshirt_size:string="Large", message:string="I love TypeScript!"):void {

    console.log("Your required T-Shirt size is :"+tshirt_size);
    console.log(message+" will be printed on your T-Shirt.")
}

make_shirt();
make_shirt("Large");
make_shirt("Medium");
make_shirt("Small","I Love JavaScript!");