// Backticks (`), Single Quotes ('), and Double Quotes (") in JavaScript

/*
DIFFERENCE:

1. SINGLE QUOTES (' ')  &  DOUBLE QUOTES (" ")
   - Both create a simple string
   - No difference in behavior — just pick one and be consistent
   - Cannot include variables or expressions inside directly

2. BACKTICKS (` `) — Template Literals
   - Allow you to embed variables using ${variable}
   - Support multiline strings (line breaks allowed)
   - More powerful and flexible
*/

// ========== EXAMPLE ==========

let name = "Alice";
let age = 25;

// Single quote — plain string
let single = 'Hello, my name is ' + name + '. I am ' + age + ' years old.';
console.log("Single Quote:", single);

// Double quote — plain string (same behavior as single)
let double = "Hello, my name is " + name + ". I am " + age + " years old.";
console.log("Double Quote:", double);

// Backtick — template literal (clean & easy!)
let backtick = `Hello, my name is ${name}. I am ${age} years old.`;
console.log("Backtick:", backtick);

// Bonus: backticks support multiline strings
let multiline = `
Name: ${name}
Age: ${age}
`;
console.log("Multiline with Backticks:", multiline);

/*
OUTPUT:
Single Quote: Hello, my name is Alice. I am 25 years old.
Double Quote: Hello, my name is Alice. I am 25 years old.
Backtick: Hello, my name is Alice. I am 25 years old.
Multiline with Backticks:
Name: Alice
Age: 25
*/
