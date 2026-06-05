(function () {
    console.log("Hi");
})(); //sometimes we use this function in playwright. Immediately Invoke

//most of the IIFE functions do not have name
(function () {
    // playwright to run the test
})();//here, it will automatically call it by itself. it is not reusbale. Recursive is different.

(function () {
    console.log("Staging")
})();


(() => {
    console.log("Setup complete");//we can use this for browser
})();