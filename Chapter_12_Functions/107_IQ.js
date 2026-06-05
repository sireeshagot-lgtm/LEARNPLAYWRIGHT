/*function runTest(name, status, duration) {
    return `${name}: ${status} (${duration}ms)`;
}
runTest("Login", "pass", 320);*/

//we need to assign the value. otherwise nothing will be printed.

function runTest(name, status, duration) {
    return `${name}: ${status} (${duration}ms)`;
}
const r = runTest("Login", "pass", 320);
console.log(r);