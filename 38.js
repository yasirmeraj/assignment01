function describe_city(city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log(city + " is in " + country);
}
//calling fuction describe_city with default parameters
describe_city();
describe_city("Paris", "France");
describe_city("Tokoyo", "Japan");
describe_city("Lahore");
