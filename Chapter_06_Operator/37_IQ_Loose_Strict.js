console.log(0 == "")    //true because the equality operator performs type coercion and considers the empty string to be equal to the number 0s
console.log(0 == "0")//true because the equality operator performs type coercion and considers the string '0' to be equal to the number 0
console.log("" == "0")//false because both sides are strings but they are not the same
console.log(false == "false")//false because both sides are different types and when converted to numbers they are not equal
console.log(false == "0")//true because both sides are different types but when converted to numbers they are equal (0)


console.log(0 == false)//true because the equality operator performs type coercion and considers the boolean false to be equal to the number 0
console.log(null == 0)//false because null is only loosely equal to undefined and not to any other value
console.log(undefined == 0)//false because undefined is only loosely equal to null and not to any other value
console.log(null == undefined)//true because null and undefined are loosely equal
console.log(null === undefined)//false because null and undefined are of different types and the strict equality operator does not perform type coercion