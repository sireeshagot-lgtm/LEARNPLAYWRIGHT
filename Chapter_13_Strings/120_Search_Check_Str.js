// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";

// includes
console.log(url.includes("staging"));
console.log(url.includes("production"));

// startsWith / endsWith
url.startsWith("https"); // true
url.startsWith("http://");  //fasle
url.endsWith("true");  // true


// indexOf / lastIndexOf
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));

console.log(url.indexOf("nothere"));//-1 which means it doesnt exist
console.log(url.indexOf("x"));//-1

//
console.log(url.search(/login/));
console.log(url.search(/vwo/));

// /regex/ - Regular EXPRESSION - These are nothing but A-patterns that you can find within
//  the strings automatically. 