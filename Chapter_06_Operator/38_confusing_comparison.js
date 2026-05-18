// JavaScript Confusing Comparison: == (Loose Equality) vs === (Strict Equality)

// ============================================
// 1. BASIC DIFFERENCE
// ============================================

// == compares values with type coercion
// === compares values AND types (no coercion)

console.log("=== BASIC DIFFERENCE ===");
console.log("5 == '5':", 5 == '5');      // true  (string coerced to number)
console.log("5 === '5':", 5 === '5');    // false (different types)

console.log("0 == false:", 0 == false);    // true
console.log("0 === false:", 0 === false);  // false

// ============================================
// 2. NUMBER VS STRING
// ============================================

console.log("\n=== NUMBER VS STRING ===");
console.log("1 == '1':", 1 == '1');           // true
console.log("1 === '1':", 1 === '1');         // false
console.log("0 == '0':", 0 == '0');           // true
console.log("0 === '0':", 0 === '0');         // false
console.log("0 == '':", 0 == '');             // true (empty string coerced to 0)
console.log("0 === '':", 0 === '');           // false

// ============================================
// 3. BOOLEAN COMPARISONS (Very Confusing!)
// ============================================

console.log("\n=== BOOLEAN COMPARISONS ===");
console.log("true == 1:", true == 1);         // true
console.log("true === 1:", true === 1);       // false
console.log("false == 0:", false == 0);       // true
console.log("false === 0:", false === 0);     // false
console.log("false == '':", false == '');     // true
console.log("false === '':", false === '');   // false

// Boolean to number coercion: true -> 1, false -> 0
console.log("'1' == true:", '1' == true);     // true ('1' -> 1, true -> 1)
console.log("'2' == true:", '2' == true);     // false ('2' -> 2, true -> 1)
console.log("'0' == false:", '0' == false);   // true ('0' -> 0, false -> 0)

// ============================================
// 4. NULL AND UNDEFINED
// ============================================

console.log("\n=== NULL AND UNDEFINED ===");
console.log("null == undefined:", null == undefined);     // true
console.log("null === undefined:", null === undefined);   // false
console.log("null == null:", null == null);               // true
console.log("null === null:", null === null);             // true
console.log("undefined == undefined:", undefined == undefined);     // true
console.log("undefined === undefined:", undefined === undefined);     // true

// null/undefined don't coerce to anything else
console.log("null == 0:", null == 0);         // false
console.log("null == false:", null == false);   // false
console.log("undefined == false:", undefined == false); // false
console.log("undefined == 0:", undefined == 0); // false

// ============================================
// 5. OBJECT COMPARISONS
// ============================================

console.log("\n=== OBJECT COMPARISONS ===");
let obj1 = { a: 1 };
let obj2 = { a: 1 };
let obj3 = obj1;

console.log("obj1 == obj2:", obj1 == obj2);     // false (different references)
console.log("obj1 === obj2:", obj1 === obj2);   // false (different references)
console.log("obj1 == obj3:", obj1 == obj3);     // true (same reference)
console.log("obj1 === obj3:", obj1 === obj3);   // true (same reference)

// Object to primitive coercion
console.log("[1] == '1':", [1] == '1');         // true ([1] -> '1')
console.log("[1] === '1':", [1] === '1');       // false
console.log("[1,2] == '1,2':", [1,2] == '1,2'); // true
console.log("[] == false:", [] == false);       // true ([] -> '' -> 0 -> false)
console.log("[] === false:", [] === false);     // false

// ============================================
// 6. SPECIAL CASES (The Really Confusing Ones!)
// ============================================

console.log("\n=== SPECIAL CASES ===");

// NaN is never equal to anything, not even itself
console.log("NaN == NaN:", NaN == NaN);         // false
console.log("NaN === NaN:", NaN === NaN);       // false
console.log("isNaN(NaN):", isNaN(NaN));         // true

// Infinity
console.log("Infinity == Infinity:", Infinity == Infinity);     // true
console.log("Infinity === Infinity:", Infinity === Infinity);   // true
console.log("-Infinity == -Infinity:", -Infinity == -Infinity); // true

// +0 and -0
console.log("+0 == -0:", +0 == -0);             // true
console.log("+0 === -0:", +0 === -0);           // true
console.log("Object.is(+0, -0):", Object.is(+0, -0)); // false

// ============================================
// 7. THE MOST CONFUSING COMPARISONS
// ============================================

console.log("\n=== MOST CONFUSING CASES ===");

console.log("[] == ![]:", [] == ![]);           // true ! (both coerce to 0)
// Explanation: ![] -> false, [] -> '' -> 0, false -> 0

console.log("[] == false:", [] == false);       // true
console.log("'' == false:", '' == false);       // true
console.log("'' == 0:", '' == 0);               // true
console.log("0 == false:", 0 == false);          // true
console.log("0 == '':", 0 == '');                // true

// The transitive property doesn't hold with ==
console.log("\nTransitive property test:");
console.log("'0' == false:", '0' == false);     // true
console.log("0 == false:", 0 == false);          // true
console.log("'0' == 0:", '0' == 0);              // true
console.log("'0' === false:", '0' === false);   // false (but could be expected true? No!)

// More edge cases
console.log("\n=== MORE EDGE CASES ===");
console.log("null == false:", null == false);     // false
console.log("undefined == false:", undefined == false); // false
console.log("null == 0:", null == 0);             // false
console.log("undefined == 0:", undefined == 0);   // false

console.log("'false' == false:", 'false' == false); // false ('false' -> NaN)
console.log("'true' == true:", 'true' == true);     // false ('true' -> NaN)

// ============================================
// 8. RECOMMENDATION: ALWAYS USE === AND !==
// ============================================

console.log("\n=== RECOMMENDATION ===");
console.log("Best Practice: Always use === (strict equality) and !== (strict inequality)");
console.log("This avoids unexpected type coercion and makes your code more predictable.");
console.log("Use == only when you explicitly want type coercion (rare cases).");

// ============================================
// 9. SUMMARY TABLE
// ============================================

console.log("\n=== SUMMARY OF KEY DIFFERENCES ===");
const comparisons = [
    ['Expression', '== Result', '=== Result'],
    ['5 == "5"', true, false],
    ['0 == false', true, false],
    ['null == undefined', true, false],
    ['[] == false', true, false],
    ['NaN == NaN', false, false],
    ['[] == []', false, false],
    ['{} == {}', false, false],
];

console.table(comparisons.slice(1).map(([expr, loose, strict]) => ({
    Expression: expr,
    '== (Loose)': loose,
    '=== (Strict)': strict
})));
