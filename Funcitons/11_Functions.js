let argument1 = 8;
let argument2 = 2;
function functionName(parameter1, parameter2) {
  console.log(parameter1 + parameter2);
}
functionName(argument1, argument2);

function add(num1, num2) {
  return num1 + num2;
}
let result = add(1, 2);
console.log(result);

function loginUsername(username) {
  return `${username} has logged in`;
}
console.log(loginUsername("tun"));

//arrow function
let add4 = (a, b) => a + b;
console.log(add4(3, 2));

// Function Expression
const add2 = function (a, b) {
  console.log(a + b);
};
add2(2, 3);

//declaration
function add3(a, b) {
  console.log(a + b);
}
add3(2, 3);

console.log("test");

let GOOGLE_URL = "https://jsonplaceholder.typicode.com/users/1";
let functions_response = fetch(GOOGLE_URL);

console.log(functions_response);

let result123 = fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    console.log(response);
    console.log("json: ", response.json);
    return response.json();
  })
  .then((parameter) => {
    console.log(parameter);
    return parameter.name;
  })
  .then((name) => {
    console.log(name);
    return name;
  });

console.log("result123: ", result123);

let cart = ["apple", "banana", "orange"];
let promise = createOrder(cart);
promise.then(function (orderId) {
  console.log(orderId);
});
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err);
    }
    const orderId = 12345;
    if (orderId) {
      resolve(orderId);
    }
  });
  return pr;
}

function validateCart(cart) {
  return true;
}

console.log("test 23 June");
