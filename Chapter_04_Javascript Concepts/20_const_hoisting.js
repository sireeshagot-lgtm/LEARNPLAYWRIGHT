console.log(c); //ReferenceError: Cannot access 'c' before initialization
console.log("Hi");//from line 2 to line 8 - it will be in TDZ zone, so it will throw a ReferenceError if we try to access it before initialization
console.log("Hi");
console.log("Hi");
console.log("Hi");
console.log("Hi");
console.log("Hi");

const c = "Hello" 
