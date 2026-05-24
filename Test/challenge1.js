/*Create a reusable label normalizer for JavaScript QA utilities.

Rules:
- Trim leading and trailing spaces.
- Convert text to lowercase.
- Replace non-alphanumeric groups with a single hyphen.
- Prefix the result with "js-basic-".*/

function normalizeJsBasicsLabel(label) {
    label = label.trim().toLowerCase();
    return "js-basic-" + label
}
console.log(normalizeJsBasicsLabel("Login button"))
console.log(normalizeJsBasicsLabel("User Profile: Edit!"))
console.log(normalizeJsBasicsLabel("---Search@@Box---"))
console.log(normalizeJsBasicsLabel(""))