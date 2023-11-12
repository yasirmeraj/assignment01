var current_user_list = ["admin", "hamza", "ali", "yasir", "zahid"];
var new_user_list = ["ali", "admin", "saleem", "nasir", "zia"];
console.log("Current Users List");
console.log(current_user_list);
console.log("New Users List");
console.log(new_user_list);
for (var i = 0; i < new_user_list.length; i++) {
    for (var j = 0; j < current_user_list.length; j++) {
        if (new_user_list[i].toLowerCase() == current_user_list[j].toLowerCase()) {
            console.log("The user " + new_user_list[i] + " is already exist , please enter new username");
            break;
        }
        else {
            console.log("The user " + new_user_list[i] + " is available");
            break;
        }
    }
}
