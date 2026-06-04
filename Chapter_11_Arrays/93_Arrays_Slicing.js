// Slicing & Combining
let arr = [1, 2, 3, 4, 5];
//. // slice(start, end) — returns new array, does NOT mutate actual -> ( start, end-1) . index = 0
//Don't give the end, it will automatically take from start to end. 

// console.log(arr.slice(1, 3)); // ( start, end-1) 

// console.log(arr.slice(2, 4));
// console.log(arr.slice(2, 5));

console.log(arr.slice(2));

//start from the -1 and go till -2. 
console.log(arr.slice(-2));

console.log(arr.slice(0));

let arry = [10, 20, 30, 40, 50];
let s = arry.slice(1, 4);   // [20, 30, 40]
console.log(arry);
console.log(s);

let array = [10, 20, 30, 40, 50];
let removed = array.splice(1, 2);   // remove 2 elements from index 1
console.log(removed);             // [20, 30]
console.log(array); // this will modify your array which is problematic. 

//Use slice if you want to be on safer side