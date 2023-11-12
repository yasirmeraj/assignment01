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
guests[2]="Ali";
console.log("So our modified guests list will now be ...");
for (let i=0;i<guests.length;i++) {

    console.log(guests[i]+","+message);
}
