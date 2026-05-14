let decimal = 42;
console.log(typeof decimal); // number - decimal integer literal

let negative = -17;
console.log(typeof negative); // number - negative number literal

let floating = 3.14159;
console.log(typeof floating); // number - floating point (decimal) literal

let scientific = 6.022e23;
console.log(typeof scientific); // number - scientific (exponential) notation literal

let hex = 0xFF;
console.log(typeof hex); // number - hexadecimal literal (base 16)

let binary = 0b1010;
console.log(typeof binary); // number - binary literal (base 2)

let octal = 0o77;
console.log(typeof octal); // number - octal literal (base 8)

let bigIntValue = 9007199254740991n;
console.log(typeof bigIntValue); // bigint - BigInt literal for arbitrarily large integers

let infinityValue = Infinity;
console.log(typeof infinityValue); // number - Infinity represents positive infinity

let negInfinity = -Infinity;
console.log(typeof negInfinity); // number - negative infinity

let notANumber = NaN;
console.log(typeof notANumber); // number - NaN (Not-a-Number) is a special numeric value
