var a = 10; //Global scope -means available everywhere.
console.log(a);

//var is function scoped

function printHello() {
    console.log("Hello The Testing Academy")
    var a = 20; //Local scope , it is different from global scope 'a'(Example given related to Pramod from local place and from outside place. When wife calls Pramod, local will come).
    console.log(a);//20
    if (true) {
        var a = 30;
        console.log(a); //30
    }
}

printHello();

var a = 50;
console.log(a);
//local scope will have highest preference