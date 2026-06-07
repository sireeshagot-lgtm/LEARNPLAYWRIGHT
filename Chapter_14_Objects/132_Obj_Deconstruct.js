
const user = { name1: "John", age: 30, city: "NYC" };

// Basic destructuring
// const { name1, age } = user; //I want only name1 and age. I can pick up from user
// console.log(name1);
// console.log(age);

// Rename variables
const { name1: userName, age: userAge } = user;
console.log(userName);
console.log(userAge);

// destructuring
const { age } = user;

// Default values
const { country = "USA" } = user; //if country exists in user, give that value. If it doesnt exist, then give USA which is default value
console.log(country);
console.log(user);//country will not be added to user.

const data = {
    user:
    {
        name: "John",
        address:
        {
            city: "NYC"
        }
    }
};

//const { user: { address: { city } } } = data;
console.log(data.user.address.city);