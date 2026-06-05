// Rest of the param.
function logResult(suiteName, ...results) {
    console.log(suiteName);
    console.log(results);
}

logResult('Login Test', 1, 2, 3);
logResult('Reg Test', "Hello", "Pramod", "Testing");

//function logResult(...results, suiteName) -it cannot be like this. spread array should be the last one. ...results is called
// spread. only 3 dots are allowed. there is no limiation of arguments.
//We will be using it in automation but rarely.