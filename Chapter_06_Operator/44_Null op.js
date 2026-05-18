//??

console.log(null >= 0);//null==0 or null>0
console.log(null === 0)

//?? nullish
let a = null;
let b = a ?? "Default value";
console.log(b);

let amul = null;
let milk_required = amul ?? "Nandini milk"
console.log(milk_required);


let amul1 = "amul_present";
let milk_required1 = amul1 ?? "Nandini milk"
console.log(milk_required1);


let amul2 = undefined;
let milk_required2 = amul2 ?? "Nandini milk"
console.log(milk_required2);

//We use this operator in automation when we want to assign default value to a variable if the original value is null or undefined. It helps us to avoid errors and ensure that our code runs smoothly even when some values are missing or not available.
//sometimes, we use single question mark also


//val = "which milk?->" + val;
//console.log(val);