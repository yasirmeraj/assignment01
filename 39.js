function city_country(city, country) {
    if (city === void 0) { city = "Lahore"; }
    if (country === void 0) { country = "Pakistan"; }
    return (city + ", " + country);
}
//calling fuction city_country with default parameters which returns formatted string
console.log(city_country());
console.log(city_country("Paris", "France"));
console.log(city_country("Tokoyo", "Japan"));
