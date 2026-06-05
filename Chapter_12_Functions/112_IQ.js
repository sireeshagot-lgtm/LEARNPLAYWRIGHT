let g_x = 10;


// Nested scope | blocked scope 
function outer() {
    let x = 10;

    function inner() {
        let y = 20;
        console.log(x); //outer variables are allowed internal. But inner variables are not allowed

    }
    inner();
    console.log(y);
}

//function within function is not used in automation.