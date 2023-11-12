var places_original_list = ["Baku", "Uramqi", "Vancuvor", "Seatle", "Antalya"];
//Places to visit without any order
console.log("Places list to visit in its orginal order:");
console.log(places_original_list);
//make a clone copy temp_list of original list i.e places_original_list
var temp_list = places_original_list.slice();
//print list with alphabatical order without modifying original list places_original_list
console.log("Alphabatical Orderd List:");
console.log(temp_list.sort());
//Our orginal list is still in orginal state after sorting temporary list
console.log("Places list in its original order:");
console.log(places_original_list);
//print list with alphabatical order without modifying original list places_original_list
console.log("Alphabatical Reverse Orderd List:");
console.log(temp_list.reverse());
//Our orginal list is still in orginal state after sorting temporary list
console.log("Places list in its original order:");
console.log(places_original_list);
//Reverse the order of Our orginal list 
console.log("Places original list in Reverse order:");
console.log(places_original_list.reverse());
//Reverse the order of Our orginal list again 
console.log("Reverse original list order again:");
console.log(places_original_list.reverse());
//Sort original list in alphabatical order 
console.log("Sort original list in alphabatical order:");
console.log(places_original_list.sort());
//Sort original list in reverse alphabatical order 
console.log("Sort original list in reverse alphabatical order:");
console.log(places_original_list.reverse());
/*console.log(places.sort());
for (let i=0;i<places.length;i++) {
    console.log(places[i]);
}
*/
