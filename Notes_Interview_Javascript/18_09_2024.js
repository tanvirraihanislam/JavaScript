//types of function declaration
// 1. Regular Function Declaration
function myFunctionRegular(p1, p2) {
  return "answer is: " + p1 * p2;
}
console.log(myFunctionRegular(2, 3));
//2. Function Expression
const myFunctionExpression = (p1, p2) => {
  return "answer is: " + p1 * p2;
};
console.log(myFunctionExpression(9, 3));
//3. Arrow Function
const myFunctionArrow = (p1, p2) => {
  return "answer is: " + p1 * p2;
};
console.log(myFunctionArrow(2, 0));
//4. Anonymous Function (Immediately Invoked Function Expression - IIFE)
(function (p1, p2) {
  return p1 * p2;
})(3, 4); // Example of immediate invocation

//JSON.parse
let abc1 = { name: "test" };
let abc2 = JSON.parse(JSON.stringify(abc1));
console.log(typeof abc1, typeof abc2);

// 1. reference
let dev1 = { name: "nilanjan" };
let dev2 = dev1;
dev2.name = "natarajan";
console.log("dev1: " + dev1.name);
console.log("dev2: " + dev2.name);

// 2. value
let app1 = { name: "nilanjan" };
let app2 = Object.assign({}, app1);
app2.name = "natarajan";
console.log("app1: " + app1.name);
console.log("app2: " + app2.name);

// 3. spread operator
let org1 = { name: "nilanjan" };
let org2 = { ...org1 };
org2.name = "natarajan";
console.log("org1: " + org1.name);
console.log("org2: " + org2.name);

//nested object issue with copying objects
let nestedObj1 = {
  name: "tanvir",
  address: {
    street: "gudi malkapur",
    city: "hyd",
  },
};
let nestedObj2 = { ...nestedObj1 };
nestedObj2.name = "raihan";
nestedObj2.address.city = "kolkata";
console.log("nestedObj1: " + JSON.stringify(nestedObj1));
console.log("nestedObj2: " + JSON.stringify(nestedObj2));

//issue of nested object can be solved by:
let nestedObj3 = JSON.parse(JSON.stringify(nestedObj1));
nestedObj3.address.city = "delhi";
console.log(nestedObj3);

//JSON parse and stringify does not work however, when the object has a function
let objectWithFunction1 = {
  name: "tanvir",
  address: {
    street: "gudi malkapur",
    city: "hyd",
  },
  calculateAge: function (params) {
    return 30;
  },
  joiningDate: new Date(),
};
objectWithFunction2 = JSON.parse(JSON.stringify(objectWithFunction1));
console.log("objectWithFunction1", objectWithFunction1);
console.log("objectWithFunction2", objectWithFunction2);
//type of certain data types like date is also not copied
console.log(
  "objectWithFunction1.joiningDate",
  typeof objectWithFunction1.joiningDate,
);
console.log(
  "objectWithFunction2.joiningDate",
  typeof objectWithFunction2.joiningDate,
);

//shallow copy vs deep copy

//deep copy using recursion
const createDeepCopy = (input) => {
  if (typeof input !== object) {
    return input;
  }
  let copy = Array.isArray(input) ? [] : {};
  for (key in input) {
    const value = input[key];
    copy[key] = createDeepCopy(value);
  }
  return copy;
};
