# JavaScript String Methods Cheat Sheet

## String Methods

| Method | Description | One-Liner Example | Output |
|--------|-------------|-------------------|--------|
| `charAt(index)` | Returns character at index | `"hello".charAt(1)` | `"e"` |
| `charCodeAt(index)` | Returns UTF-16 code unit at index | `"A".charCodeAt(0)` | `65` |
| `codePointAt(index)` | Returns Unicode code point at index | `"𐍈".codePointAt(0)` | `66376` |
| `concat(str)` | Concatenates strings | `"hello".concat(" world")` | `"hello world"` |
| `endsWith(search)` | Checks if string ends with substring | `"test.txt".endsWith(".txt")` | `true` |
| `includes(search)` | Checks if string contains substring | `"hello".includes("ll")` | `true` |
| `indexOf(search)` | Returns first index of substring (or -1) | `"banana".indexOf("a")` | `1` |
| `lastIndexOf(search)` | Returns last index of substring (or -1) | `"banana".lastIndexOf("a")` | `5` |
| `localeCompare(str)` | Compares two strings in locale | `"a".localeCompare("b")` | `-1` |
| `match(regex)` | Matches string against regex | `"123".match(/\d+/)` | `["123"]` |
| `matchAll(regex)` | Returns iterator of all matches | `"1a2b".matchAll(/\d/g)` | Iterator |
| `normalize(form)` | Returns Unicode normalization | `"é".normalize("NFD")` | `"é"` |
| `padEnd(length, str)` | Pads end to length with string | `"hi".padEnd(5, "-")` | `"hi---"` |
| `padStart(length, str)` | Pads start to length with string | `"5".padStart(3, "0")` | `"005"` |
| `repeat(count)` | Repeats string count times | `"ha".repeat(3)` | `"hahaha"` |
| `replace(search, newStr)` | Replaces first match | `"hello".replace("l", "x")` | `"hexlo"` |
| `replaceAll(search, newStr)` | Replaces all matches | `"hello".replaceAll("l", "x")` | `"hexxo"` |
| `search(regex)` | Searches for regex match (index) | `"abc123".search(/\d+/)` | `3` |
| `slice(start, end)` | Extracts section of string | `"hello".slice(1, 4)` | `"ell"` |
| `split(separator)` | Splits string into array | `"a,b,c".split(",")` | `["a", "b", "c"]` |
| `startsWith(search)` | Checks if string starts with substring | `"hello".startsWith("he")` | `true` |
| `substring(start, end)` | Returns substring between indices | `"hello".substring(1, 4)` | `"ell"` |
| `toLocaleLowerCase()` | Converts to lowercase (locale-aware) | `"İ".toLocaleLowerCase("tr")` | `"i"` |
| `toLocaleUpperCase()` | Converts to uppercase (locale-aware) | `"i".toLocaleUpperCase("tr")` | `"İ"` |
| `toLowerCase()` | Converts to lowercase | `"HELLO".toLowerCase()` | `"hello"` |
| `toString()` | Returns string value | `(123).toString()` | `"123"` |
| `toUpperCase()` | Converts to uppercase | `"hello".toUpperCase()` | `"HELLO"` |
| `trim()` | Removes whitespace from both ends | `"  hello  ".trim()` | `"hello"` |
| `trimEnd()` | Removes whitespace from end | `"  hello  ".trimEnd()` | `"  hello"` |
| `trimStart()` | Removes whitespace from start | `"  hello  ".trimStart()` | `"hello  "` |
| `valueOf()` | Returns primitive value | `new String("hi").valueOf()` | `"hi"` |

## String Static Methods

| Method | Description | One-Liner Example | Output |
|--------|-------------|-------------------|--------|
| `String.fromCharCode(...codes)` | Creates string from UTF-16 code units | `String.fromCharCode(65, 66)` | `"AB"` |
| `String.fromCodePoint(...points)` | Creates string from code points | `String.fromCodePoint(9731)` | `"☃"` |
| `String.raw(template, ...subs)` | Returns raw template string | `` String.raw`C:\Users\name` `` | `"C:\\Users\\name"` |

## Common Global Functions for Strings

| Function | Description | One-Liner Example | Output |
|----------|-------------|-------------------|--------|
| `String(value)` | Converts value to string | `String(123)` | `"123"` |
| `length` | Returns string length | `"hello".length` | `5` |
| `+` (concatenation) | Joins strings | `"hello" + " world"` | `"hello world"` |
| `Template literals` | Interpolates expressions | `` `Hi ${name}` `` | `"Hi Alice"` |

## Escape Sequences

| Sequence | Description | Example |
|----------|-------------|---------|
| `\n` | New line | `"a\nb"` |
| `\t` | Tab | `"a\tb"` |
| `\\` | Backslash | `"C:\\path"` |
| `\'` | Single quote | `'it\'s'` |
| `\"` | Double quote | `"say \"hi\""` |
| `\`` | Backtick (template literals) | `` \` `` |
| `\xNN` | Hex character code | `"\x41"` → `"A"` |
| `\uNNNN` | Unicode character | `"\u0041"` → `"A"` |
| `\u{NNNNNN}` | Unicode code point | `"\u{1F600}"` → `"😀"` |
