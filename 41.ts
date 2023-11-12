let megicians:string[]=["Hamoon","Nastoor","Umro","Alex","Jack"];
function show_magicians(megicians:string[]):void {
    console.log("List of Megicians:");
    for(let i=0;i<megicians.length;i++) {

        console.log(megicians[i]);
    }
}

//calling fuction show_magicians to print list of megicians
show_magicians(megicians);