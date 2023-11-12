var username = ["admin", "hamza", "ali", "yasir", "zahid"];
console.log("Registered Users List");
console.log(username);
while (true) {
    if (username.length != 0) {
        console.log("Current Status of Users List:");
        console.log(username);
        console.log("User " + username.pop() + " has been removed.");
    }
    else if (username.length == 0) {
        console.log("Current Status of Users List:");
        console.log(username);
        console.log("User list is empty now, we need to find some users!");
        break;
    }
}
