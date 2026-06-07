let c = { status: "pass" };
let d = { status: "pass" };
console.log(c); //values will be the asme but references will be different
console.log(d); //values will be the asme but references will be different

if (c === d) {
    console.log("true");
} else {
    console.log("false");
}