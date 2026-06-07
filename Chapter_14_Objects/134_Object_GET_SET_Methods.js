const user = {
    firstName: "Pramod",
    lastName: "Dutta",
    get fullName() {
        return this.firstName + this.lastName;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
}
// we are not going to use this in Playwright

// Objects - JS {}
// Class and Object  - This is different from Objects
// "this" means current value in the Object.


//his is the older way of creating classes and objects
console.log(user.fullName);
user.fullName = "Amit Sharma";
console.log(user.fullName);


// class User{
//     firstname
//     lastName,
//     fullName(){

//     }
// }