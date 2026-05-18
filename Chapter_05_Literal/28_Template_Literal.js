/*let firstname = "Sireesha"
let fullname = `Hi ${firstname} Gottipati`
console.log(fullname); // Hi sireesha Gottipati*/


let env = "staging"
env = "Prod"
const userid = 123
let url = `https://${env}.example.com/${userid}`//url will be dynamic in nature based on the environment and user id
console.log(url); // https://staging.example.com/123