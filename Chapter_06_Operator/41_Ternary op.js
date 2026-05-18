let raj_age = 18;
let raj_will_goa = raj_age >= 18 ? "Raj will go goa" : "No Goa";
console.log(raj_will_goa);

let naina_age = 20;
let can_vote = naina_age > 20 ? "Yes" : "No";
console.log(can_vote);

let hyd_city_temp = 40;
let hyd_city_weather = hyd_city_temp >= 40 ? "Sunny" : "Cool";
console.log(hyd_city_weather);

let actualstatuscode = 200;
let exepectedstatuscode = 200;
let statuscode = actualstatuscode == exepectedstatuscode ? "Test case passed" : "Test case failed";
console.log(statuscode);

let env = "Staging"
let baseurl = env === "prod"
    ? "https://www.google.com"
    : "https://staging.google.com";
console.log(baseurl);

let isCI = true;
let browserMode = isCI ? "Headless" : "Headed";
console.log("Launching browser in:", browserMode, "mode");

let responsetime = 850; //ms
let sla = 1000//ms
let slastaus = responsetime <= sla ? "Response time is within SLA" : "Response time is above SLA";
console.log(`Response time: ${responsetime}ms - ${slastaus}`);

let condition = true;
let IsSKMale = condition ? true : false;
console.log(IsSKMale);


//How is ternary operator written
// condition ? value if true : value if false

//Nested Ternary operator
//Multiple condition
let age_pramod = 25;
let is_pramod_d = age_pramod > 18 ? (age_pramod > 26 ? "Drink" : "No Drink") : "No Goa";
console.log(is_pramod_d);

let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirection" :
            statusCode < 500 ? "Client Error" : "Server Error"
console.log(`Status ${statusCode} belongs to category: ${category}`);

let a = 10, b = 5, c = 18;
let result = a > b ? (a > c ? "a is the largest" : "c is the largest") : "b is the largest"
console.log(result);

let d = 25, e = 20
let maxnum = d > e ? "d" : "e";
console.log(`Maximum num: ${maxnum} which is ${d}`);

let temp = 12;
let feel = (temp >= 40) ? "Very hot" :
    (temp >= 30) ? "Hot" :
        (temp >= 20) ? "Warm" :
            (temp >= 10) ? "Cool" : "Very Cold"
console.log(`Temperature: ${temp}°C - Feeling: ${feel}`)    