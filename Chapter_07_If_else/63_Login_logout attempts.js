//Login Lockout After Failed Attempts
//Track failed login attempts. Lock the account after 3 failed attempts.

let attempts = 2

if (attempts === 0) {
    console.log("Input: attempts = " + attempts, "Output: Login sucessful")
}

else if (attempts === 3) {
    console.log("Input: attempts = " + attempts, "Output: Account Locked, contact support")
}

else if (attempts === 2) {
    console.log("Input: attempts = " + attempts, "Output: 1 attempt left before lockout")
}