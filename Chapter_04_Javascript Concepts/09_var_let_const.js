var v = 10;
let l = 20;
const c = 3.3;

var browser = "chrome"
var browser = "firefox";//redeclaration of var is allowed
browser = "edge";//reassignment of var is allowed
console.log(browser)

var testCases = ["login", "logout", "signup"];

for (var i = 0; i < testCases.length; i++) {
    console.log("Running test:", testCases[i]);
}

console.log("Loop counter leaked outside:", i);

//it prints 3, but it should not happen. 
// Many laguages do not allow this, but JavaScript does because of var's function scope.   
//Funny example given related to maid working in one house will not be available in another house.

console.log("Hi");
console.log("Hi");
console.log("Hi");
//Instead of calling console.log three times, we can create a function and call it three times. This is a better approach as it promotes code reusability and makes the code cleaner.
function say() {
    console.log("Hello");
}
say();
say();