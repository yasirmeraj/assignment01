var username = ["admin", "hamza", "ali", "yasir", "zahid"];
var admin_greeting_message = "Hello Admin, would you like to see a status report?";
var anyuser_greeting_message = "Thank you for logging in again";
for (var i = 0; i < username.length; i++) {
    if (username[i] == "admin")
        console.log(admin_greeting_message);
    else
        console.log("Hello " + username[i] + "," + anyuser_greeting_message);
}
