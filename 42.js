var megicians = ["Hamoon", "Nastoor", "Umro", "Alex", "Jack"];
function make_great(megician_name, message) {
    if (message === void 0) { message = "Great"; }
    return (message + ", " + megician_name);
}
function show_magicians(megicians) {
    console.log("List of Great Megicians using make_great() and show_megicain() functions:");
    for (var i = 0; i < megicians.length; i++) {
        megicians[i] = make_great(megicians[i]);
        console.log(megicians[i]);
    }
}
//calling fuction show_magicians to print list of megicians
show_magicians(megicians);
//Array of megicians is modified now by make_great() function
console.log("\nArray of megicians is modified now by make_great() function");
console.log(megicians);
