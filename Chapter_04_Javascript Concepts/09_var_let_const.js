var v = 10;
let l = 20;
const c = 3.3;

var browser = "chrome"
var browser = "firefox";//redeclaration of var is allowed
browser = "edge";//reassignment of var is allowed

var testCases = ["login", "logout", "signup"];

for (var i = 0; i < testCases.length; i++) {
    console.log("Running test:", testCases[i]);
}

console.log("Loop counter leaked outside:", i);

console.log("Hi");
console.log("Hi");
console.log("Hi");

function say() {
    console.log("Hello");
}
say();
say();