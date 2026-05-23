if ("hello") console.log("String is truthy");//"hello" is truthy
if (42) console.log("Number is truthy");
if ({}) console.log("Empty object is truthy");
if ([]) console.log("Empty array is truthy");

if ("") console.log("Won't print");//will not produce any output
if (null) console.log("Won't print");
if (undefined) console.log("Won't print");
if (NaN) console.log("Won't print");
if (0) console.log("Won't print");


let name = undefined;
if (name) {
    console.log("Hi")
} else {
    console.log("Bye")
}