/* Compare actual result with expected result and print test verdict. Sample Input/Output
expected = "Login Successful"
actual   = "Login Successful"
Output: ✅ Test Passed 

expected = "Login Successful"
actual   = "Invalid Credentials"
Output: ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials*/

let actualResult = "Invalid credentials"
let expectedResult = "Login successful";

if (actualResult === expectedResult) {
    console.log("Output: Test Passed")
}

else {
    console.log("Output: Test Failed -Expected: " + expectedResult + ", Got: " + actualResult)
}