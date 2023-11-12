let username:string []=["admin","hamza","ali","yasir","zahid"];
let admin_greeting_message: string ="Hello Admin, would you like to see a status report?";
let anyuser_greeting_message: string ="Thank you for logging in again";
for (let i=0;i<username.length;i++) {
    if (username[i]=="admin")
        console.log(admin_greeting_message);
    else
        console.log("Hello "+username[i]+","+anyuser_greeting_message);

}