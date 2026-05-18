//&& -> AND gate
// || -> OR gate

let a = true;
let b = false;
console.log(a && b) //false because both a and b need to be true for the AND operator to return true
console.log(a || b) //true because at least one of a or b is true for the OR operator to return true    
console.log(!a) //false because the NOT operator negates the value of a, which is true, so it returns false
console.log(!b) //true because the NOT operator negates the value of b, which is false, so it returns true

console.log(5 != "g") //true because the values are different, even with type coercion