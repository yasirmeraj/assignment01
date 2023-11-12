function city_country(city:string="Lahore",country:string="Pakistan"):string {

    return (city+", "+country);
}
//calling fuction city_country with default parameters which returns formatted string
console.log(city_country());
console.log(city_country("Paris","France"));
console.log(city_country("Tokoyo","Japan"));
