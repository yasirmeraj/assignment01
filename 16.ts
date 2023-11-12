let message: string="You are cordially invited to a dinner party at BBQ Tonight Restaurant. Join us for a night of great food and even better company.";
let guests: string[]=[];
guests[0]="Hamza";
guests[1]="Orhan";
guests[2]="Zia";
guests[3]="Saleem";
for(let i=0;i<guests.length;i++) {
    console.log(guests[i]+","+message);
}
console.log("--------------Important Announcement! , Mr.Zia is busy so he cannot make it!------------------");
console.log("\n\nSo I am inviting Mr. Ali inplace of Mr.Zia.....");
guests[2]="Ali"; //replacing Zia with Ali
console.log("So now our modified guests list is ...");
for (let i=0;i<guests.length;i++) {

    console.log(guests[i]+","+message);
}
console.log("\n.............Important Announcement!, Guys I have got a bigger table so we can invite more friends!");
guests.unshift("Irfan"); //this function/method will add element at the begging of an array
let mid: number=Math.floor(guests.length/2);   //calclulate middle positio of an array
guests.splice(mid,0,"Nasir"); //Add guest at the middle of the guestlist
guests.push("Imran"); //Append element at the end of array
console.log("\n\nSo now our modified list is.....");
for(let i=0;i<guests.length;i++) {
    console.log(guests[i]+","+message);
}




