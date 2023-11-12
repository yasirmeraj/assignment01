let megicians:string[]=["Hamoon","Nastoor","Umro","Alex","Jack"];

function make_great(megician_name:string,message:string="Great"):string {

        return (message+", "+megician_name);
}



function show_magicians(megicians:string[],...args:string[]):void {
    let clone_great_megicians=megicians.slice();

    console.log("List All Magicians using without (calling make_great()) modification phrase 'Great' with show_megicain() functions:");
    for(let i=0;i<megicians.length;i++) {
        console.log(megicians[i]);
    }
    
    console.log("List of Great Magicians using make_great() and show_megicain() functions:");
    for (let j=0;j<megicians.length;j++) {

        clone_great_megicians[j]=make_great(megicians[j]);
        console.log(clone_great_megicians[j])
    } 
    

    } 
    

//calling fuction show_magicians to print list of magicians
show_magicians(megicians);
//Original Array of  magicians is intact!
console.log("\nOriginal Array of  magicians is intact!");
console.log(megicians);