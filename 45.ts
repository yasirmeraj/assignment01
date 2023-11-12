
let car: {

    model:string,
    manufacturer:string,
    color:string,
    other_feature?:string, //optional feature property
    [key:string]:any  //index signature we can add as many properties as we want in future

} = {

    model:"SUV",
    manufacturer:"Suzuki",
    color:"Blue",
    other_feature:"Auto Start"
}
//here we use index signature feature for keyword key-value pairs 
function show_car_object(model:string,manufacturer:string,color:string, 
    other_attributes:{[key:string]:any},
    optional_feature:string="Auto Start"):void 
{

    car.model=model;
    car.manufacturer=manufacturer;
    car.color=color;
    car.other_feature=optional_feature;
    car.transmission=other_attributes.transmission;
    car.price=other_attributes.price;
    car.year=other_attributes.year;
    console.log(car);

}

//Call show car object fuction with all arguments
console.log("Call show car object fuction with all arguments:")
show_car_object("Cedan","Toyota","White",
 {transmission:"Automatic",price:"3 million",year:2020},
 "Auto Lock");

 //Call show car object function without optioanl feature argument
 console.log("Call show car object function without optioanl feature argument")
 show_car_object("SUV","KIA","Gray",
 {transmission:"Automatic",price:"5 million",year:2023},
 );