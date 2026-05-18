//number==string
console.log(42 == "42") //true because the equality operator performs type coercion and considers the string '42' to be equal to the number 42
console.log(42 === "42") //false because the strict equality operator does not perform type coercion and the types (number vs string) are different

console.log(42 == "45") //false because the values are different, even with type coercion
console.log(42 === "45") //false because the values and types are different   

console.log(5 == 5) //true

console.log(0 == "") //true because the equality operator performs type coercion and considers the empty string to be equal to the number 0
console.log(0 === "") //false because the strict equality operator does not perform type coercion and the types (number vs string) are different

console.log(true == 1); //true because the equality operator performs type coercion and considers true to be equal to the number 1
console.log(true === 1); //false because the strict equality operator does not perform type coercion and the types (boolean vs number) are different
console.log(true == "1"); //true because the equality operator performs type coercion and considers true to be equal to the string "1"

console.log(5 != "5") //false because the values are the same, even with type coercion
console.log(5 !== "5") //true because the strict inequality operator does not perform type coercion and the types (number vs string) are different
//console.log(5 !=== "5") //this doesnt exist and will throw a syntax error because there is no such operator as !=== in JavaScript
//==checks value or data type
//===checks value and data type