let retry = 0;
do {
    console.log("Execute a code!");
    console.log("Retrying.....", retry);
    retry++;
} while (retry < 3);

//we will be using do while in automation. This is the exactly same code that we use in automation in finding the locators