function make_sandwich (...sandwich:string[]):void {
    console.log("The summary of ordered sandwich:");
    for (let i=0;i<sandwich.length;i++) {

        console.log(sandwich[i]);

    }
}

make_sandwich("Double Egg","Salad","Cheese","Tamato Catchup","BBQ Sauce");
make_sandwich("Jalapeno Sauce","Kebab","Cheese");
make_sandwich();
