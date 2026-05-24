/*Write a program that classifies a triangle based on its side lengths. 
Given three input values representing the lengths of the sides, determine if the triangle is equilateral (all sides are equal), 
isosceles (exactly two sides are equal), or scalene (no sides are equal). Use an if-else statement to classify the triangle.*/


let side1 = 1
side2 = 1
side3 = 1
if (side1 === side2 && side2 === side3) {
    console.log("Equilateral Triangle")
}
else if (side1 === side2 || side2 === side3) {
    console.log("Isosceles Triangle")
}
else { console.log("Scalene Triangle") }