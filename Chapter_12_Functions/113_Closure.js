function outer() {
    let message = "hello";
    console.log("Outer CALLED!");
    function inner() {
        console.log(message);
    }
    return inner;
}


let fn_inner = outer();
fn_inner();

// inner(); // ReferenceError: inner is not defined


//closure,async,await are important to use in Playwright.
// But we will not use closure and callback in Playwright as it is old concept of javascript.