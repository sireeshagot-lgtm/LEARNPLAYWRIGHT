let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);
// arr = [1, 2, 3, 4, 5, 6]
// index=0,1,2,3,4,5

// splice(start, deleteCount, ...itemsToAdd)
// arr.splice(2, 1); - From 2nd index, delete 1 item
// console.log(arr);

// arr.splice(2, 0, 99); // at index 2, dont remove anything and add 99
// arr.splice(2, 1, 99); // replace
// console.log(arr);


// arr = [1, 2, 3, 4, 5, 6]
// index=0,1,2,3,4,5

arr.splice(1, 2, 10, 20);
console.log(arr);