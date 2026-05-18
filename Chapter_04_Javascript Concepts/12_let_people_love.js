//let is Block scoped
let a = 10;
//let a = 30;//SyntaxError: Identifier 'a' has already been declared. Redeclareation cannot be allowed
a = 20;//reassignment is allowed
console.log(a);
let retrycount = 0;
retrycount = retrycount + 1;
retrycount = retrycount + 1;
console.log("Retry Attempt:", retrycount)

//let retrycount = 5; //SyntaxError: Identifier 'retrycount' has already been declared. Redeclareation cannot be allowed

let testStatus = "pending";

if (testStatus === "pending") {
    let executionTime = 1200;
    console.log("Inside block:", executionTime);   // 1200
}
//console.log(executionTime); //ReferenceError: executionTime is not defined (becuase let is block scoped)

// {} - Block
// if(){}
// funcion name(){}

// let = loyal
// var = variable / traitor
/*let testCases = ["login", "logout", "signup"];

for (let i = 0; i < testCases.length; i++) {
    console.log("Running test:", testCases[i]);
}

console.log("Loop counter leaked outside:", i);*/