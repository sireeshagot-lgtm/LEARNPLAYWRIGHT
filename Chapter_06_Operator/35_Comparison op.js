//comparison operator
//> < >= <= == != === !==

//= -> Assignment operator
//== -> Equality operator (compares values, performs type coercion if necessary) In other words, loose comparison
//=== -> Strict equality operator (compares values and types, no type coercion) I other words, strict comparison

console.log(5 > 3); //true
console.log(5 < 3); //false
console.log(5 >= 5); //true
console.log(5 <= 4); //false
console.log(5 == '5'); //true because the equality operator performs type coercion and considers the string '5' to be equal to the number 5
console.log(5 === '5');