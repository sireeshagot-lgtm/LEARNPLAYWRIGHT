var a = 10; // Global Scope
console.log(a);
// Definition of the function

function printHello() {
    console.log("Hello TheTestingAcademy!");
    var a = 20; // Local Scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a); // 30
    }
    console.log("F ->", a);
}
printHello();

console.log("G ->", a);

printHello();