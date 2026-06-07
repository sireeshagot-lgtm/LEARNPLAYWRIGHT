//How objects are used in automation

let config = {};

config.browser = "chrome";
config.timeout = 3000;
config.testname = "login test";

console.log(config);

delete config.browser;
console.log(config);
// if you delete the key, it will be deleted and the if loop will 
// not be executed because config.browserdoesnt exist

if (config.browser === "chrome") {
    console.log("I will execute my TC");
}


/*let config2 = {
    browser = "chrome",
    timeout = 3000,
    testname = "login test"
};*/