//Login Lockout After Failed Attempts
//Track failed login attempts. Lock the account after 3 failed attempts.

let loginattempts = 2

if (loginattempts === 0) {
    console.log("Input: attempts = " + loginattempts, "Output: Login sucessful")
}

else if (loginattempts === 3) {
    console.log("Input: attempts = " + loginattempts, "Output: Account Locked, contact support")
}

else if (loginattempts === 2) {
    console.log("Input: attempts = " + loginattempts, "Output: 1 attempt left before lockout")
}