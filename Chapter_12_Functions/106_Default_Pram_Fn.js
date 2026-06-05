function retry(testName, maxRetries = 3, delay = 1000) {
    console.log(`Retrying ${testName} up to ${maxRetries} times, ${delay}ms apart`);

}


retry("Login Test");
retry("Registeration Test", 5, 2000);

//whenever  we run a test, we tr max of 3 retries and delay by 1000ms.
//This concept is taken from python. In pyhton, multiple paramaeters can be sed.
//This is not supported in JAva.