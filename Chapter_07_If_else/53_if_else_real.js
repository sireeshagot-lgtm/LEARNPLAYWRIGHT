let username = "Dev";
let password = "secure123";

let isAccountLocked = true;

/*if ((username === "Dev" && password === "secure123")) {
    console.log("User is allowed to enter")
}
else {
    console.log("User not allowed to enter")
}*/

//combined logical operator with if else

if ((username === "Dev" && password === "secure123") && !isAccountLocked) {
    console.log("User is allowed to enter")
}
else {
    console.log("User not allowed to enter")
}