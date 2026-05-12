var a = 10; //Global scope variable
console.log(a);

//var is function scoped

function printHello() {
    console.log("Hello The Testing Academy")
    var a = 20; //Local scope variable, it is different from global variable 'a'
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a);
    }
}

printHello();

var a = 50;
console.log(a);