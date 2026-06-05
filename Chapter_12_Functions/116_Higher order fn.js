// Higher-Order Functions
// A function that takes a function as argument or returns a function.

function runWithLoggin(testFn, testName) {
    console.log(`Starting: ${testName}`);
    let result = testFn();
    console.log(`Finished: ${testName} ->${result}`);
    return result;
}

function loginTest() {
    return "pass";
}

function loginTestFAILED() {
    return "fail";
}

runWithLoggin(loginTest, "Login Test");
runWithLoggin(loginTestFAILED, "Dashboard Failed Test");