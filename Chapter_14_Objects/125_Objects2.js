// Objects
// Key and value

let student1 = { name: "Amit", age: 65 }; //there are 2 key values.
let student2 = { name: "Pramod" };
let student3 = { name: "Pramod", age: 87, phone: 987654320 };

// Key will not be in the double quotes
// below key in double quote is actually JSON

let JSON_student4 = { "name": "Pramod", "age": 87, "phone": 987654320 };


let a = { status: "pass" }; //Javascript engine will create a memory with status=pass and it will assign a as reference to the memory.
console.log(a.status);
console.log(a["status"]);

//let a1 = { status: 'pass' }; //we can create a similar varaible
//console.log(a1.status);



let b = a; // In this case, b will also be assigned to the memory. So, both a and b are no assigned
b.status = "fail";
console.log(a.status); //objects copy the reference //fail
console.log(b.status); //fail

//call by reference concept

if (b === a) {
    console.log("true");
} else {
    console.log("false");
}