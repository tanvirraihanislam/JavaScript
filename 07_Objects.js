let jsUser = {
  "name": "hello",
  "full name": "hello ah", //cannot use method 1 to search thi property
};

console.log(jsUser);
//two ways to find value of a property
console.log(jsUser.name); //1
console.log(jsUser["name"]); //2
/*this won't work:
console.log(jsUser."full name");
 */

//symbol
//const mySym = Symbol("key1");
let mySym;

//singleton
let singletonObject = new Object();

//non singleton
let nonSingletonObject = {};

//object literals
const jsUser_literal = {
  name: "Hitesh",
  age: 18,
  location: "jaipur",
  days: ["monday", "tuesday"],
  [mySym]: "myKey1",
};
console.log(jsUser_literal["days"]);

console.log(jsUser_literal["location"]);

//to get symbols, there is no other option to call other than like this:
console.log(jsUser_literal[mySym]);

jsUser_literal.greeting = function () {
  console.log("hello js user");
};
console.log(jsUser_literal.greeting);
jsUser_literal.greeting2 = function () {
  console.log(`hello js user, ${this.name}`);
};
console.log(jsUser_literal.greeting2());
