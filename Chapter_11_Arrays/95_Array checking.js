// Checking Arrays

// Check if something IS an array
let result = Array.isArray([1, 2, 3]);
console.log(result);
let result1 = Array.isArray("a"); // [] is must for arrays
console.log(result1);

// every & some

[80, 90, 85].every(s => s >= 70); // true
[80, 60, 85].every(s => s >= 70); // false

// Playwright API 
[200, 201, 203].every(statuscode => statuscode > 200);

// some — AT LEAST ONE must pass
[80, 60, 85].some(s => s < 70); // true -> This is arrow function, s is the parameter and s<=70 is the condition
[80, 90, 85].some(s => s < 70); // false

//arrow : s => s >= 70