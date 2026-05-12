//let is Block scoped
let a = 10;

let retrycount = 0;
retrycount = retrycount + 1;
retrycount = retrycount + 1;
console.log("Retry Attempt:", retrycount)

//let retrycount = 5; //SyntaxError: Identifier 'retrycount' has already been declared

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
// var = varirable / triator