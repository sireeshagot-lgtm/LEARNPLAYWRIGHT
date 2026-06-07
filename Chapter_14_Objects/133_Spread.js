const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const copy = { ...obj1 }; //... means it will take all the values
console.log(copy)

//why do we keep const for objects. because we dont want to change the reference value. We  want to change only the keys values 

let config1 = { browser: "Chrome", timeout: 3000 };
// ✅ Modifying properties — ALLOWED
config1.browser = "Firefox";
config1.timeout = 5000;
config1.retries = 2;
console.log(config1);

config1 = { browser: "Safari" };
console.log(config1);

// print
console.log("---- ")

const config = { browser: "Chrome", timeout: 3000 };
// ✅ Modifying properties — ALLOWED
config.browser = "Firefox";
config.timeout = 5000;
config.retries = 2;
console.log(config);

// config = { browser: "Safari" };
console.log(config);