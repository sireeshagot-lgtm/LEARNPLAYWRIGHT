//let is block-scoped, which means it is only accessible within the block it is defined in. This is different from var, which is function-scoped and can be accessed outside of the block it is defined in.
let x = "global";
if (true) {
    //console.log(x); //output will not be "global" because x is not accessible outside of the block it is defined in
    //it enters TDZ (Temporal Dead Zone) and throws a ReferenceError if we try to access it before initialization
    let x = "block";//local variable, TDZ ends after initialization, so it can be accessed after this line
    console.log(x); // Output: block
}
console.log(x); // Output: global, because the block-scoped variable x does not affect the global variable x