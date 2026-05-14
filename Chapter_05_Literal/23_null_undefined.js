/**
 * Null vs Undefined in JavaScript
 * 
 * null:      It is an assignment value that represents "no value" or "empty value".
 *            It is intentionally assigned by the programmer to indicate that a 
 *            variable intentionally has no value.
 *            typeof null === "object" (this is a known bug in JavaScript)
 * 
 * undefined: It means a variable has been declared but has not yet been assigned 
 *            a value. It is the default value of uninitialized variables.
 *            typeof undefined === "undefined"
 */

// ==========================
// 1. UNDEFINED EXAMPLES
// ==========================

// A variable declared but not initialized is undefined
let unassignedVariable;
console.log("Unassigned variable:", unassignedVariable);        // undefined
console.log("Type of undefined:", typeof unassignedVariable);   // "undefined"

// Function that doesn't return anything implicitly returns undefined
function doNothing() {
    // no return statement
}
let result = doNothing();
console.log("Function with no return:", result);                // undefined

// Accessing a non-existent object property returns undefined
let person = { name: "Alice" };
console.log("Missing property:", person.age);                   // undefined

// Function parameter without an argument is undefined
function greet(name) {
    console.log("Greeting:", name);
}
greet();                                                        // undefined


// ==========================
// 2. NULL EXAMPLES
// ==========================

// null must be explicitly assigned
let emptyValue = null;
console.log("Null value:", emptyValue);                         // null
console.log("Type of null:", typeof emptyValue);                // "object" (known JS quirk/bug)

// Common use-case: resetting an object reference
let user = { id: 1, name: "Bob" };
user = null;  // explicitly clearing the reference
console.log("Cleared user:", user);                             // null


// ==========================
// 3. KEY DIFFERENCES
// ==========================

console.log("\n--- Key Differences ---");

// Difference 1: Type
console.log("typeof undefined:", typeof undefined);             // "undefined"
console.log("typeof null:", typeof null);                       // "object"

// Difference 2: Equality
console.log("null == undefined:", null == undefined);           // true  (loose equality)
console.log("null === undefined:", null === undefined);         // false (strict equality)

// Difference 3: Usage intent
// undefined -> JavaScript says: "this doesn't have a value yet"
// null      -> Programmer says: "I want this to have no value"

let a;               // undefined by JavaScript
let b = null;        // null by programmer's choice

console.log("a (uninitialized):", a);                           // undefined
console.log("b (explicitly null):", b);                         // null


// ==========================
// 4. PRACTICAL COMPARISON
// ==========================

function checkValue(value) {
    if (value === null) {
        return "Value is explicitly null";
    } else if (value === undefined) {
        return "Value is undefined (not set)";
    } else {
        return "Value is: " + value;
    }
}

console.log("\n--- Practical Checks ---");
console.log(checkValue(null));                                  // "Value is explicitly null"
console.log(checkValue(undefined));                             // "Value is undefined (not set)"
console.log(checkValue(0));                                     // "Value is: 0"
console.log(checkValue(""));                                    // "Value is: "
