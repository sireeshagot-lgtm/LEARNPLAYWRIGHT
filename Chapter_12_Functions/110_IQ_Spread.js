function add(a, b, c) {

    return a + b + c;

}
let num = [1, 2, 3];
//let sum = add(1, 2, 3);
let sum = add(...num);
console.log(sum);

/*let responseCodes = [200, 201, 404];

function hasError(...codes) {
    return codes.some(c => c >= 400);
}
hasError(...responseCodes); // true*/