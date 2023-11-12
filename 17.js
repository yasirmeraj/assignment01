var message = "You are cordially invited to a dinner party at BBQ Tonight Restaurant. Join us for a night of great food and even better company.";
var guests = [];
guests[0] = "Hamza";
guests[1] = "Orhan";
guests[2] = "Zia";
guests[3] = "Saleem";
for (var i = 0; i < guests.length; i++) {
    console.log(guests[i] + "," + message);
}
console.log("--------------Important Announcement! , Mr.Zia is busy so he cannot make it!------------------");
console.log("\n\nSo I am inviting Mr. Ali inplace of Mr.Zia.....");
guests[2] = "Ali"; //replacing Zia with Ali
console.log("So our modified guests list will now be ...");
for (var i = 0; i < guests.length; i++) {
    console.log(guests[i] + "," + message);
}
console.log("\n.............Important Announcement!, guys i have got bigger table so we can invite more friends!");
guests.unshift("Irfan"); //this function/method will add element at the begging of an array
var mid = Math.floor(guests.length / 2); //calclulate middle position of an array
guests.splice(mid, 0, "Nasir"); //Add guest at the middle of the guestlist
guests.push("Imran"); //Append element at the end of array
console.log("\n\nSo our new modified list will be.....");
for (var i = 0; i < guests.length; i++) {
    console.log(guests[i] + "," + message);
}
console.log("\n------------Important Announcement!,finally I have got a dinner table for two persons only............... ");
//Remove guests to accomodate only two persons, further inform removed guests.
for (var i = 0; i < guests.length; i++) {
    if (guests.length == 2) {
        break;
    }
    else {
        console.log("Dear " + guests.pop() + ",I am sorry!, due to capacity issue , I am unable to invite you this time.");
    }
}
//Inform to remaining guests they are still invited
console.log("\n...............Remaining Guests.................");
for (var i = 0; i < guests.length; i++) {
    console.log("\nDear " + guests[i] + ",your invitation is confirmed , please reach on time.");
}
//Remove remaining guests from the list
while (guests.length > 0) {
    guests.pop();
}
console.log("\nWe have served all the guests, Now the list is Empty");
console.log(guests);
