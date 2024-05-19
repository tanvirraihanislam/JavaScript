console.log("1");
let score = "33";
console.log(typeof score);
//can also be written as: console.log(typeof(score));
let valueInNumber = Number(score);
console.log(typeof valueInNumber);

console.log("2");
let score_2 = "33abc";
let valueInNumber_2 = Number(score_2);
console.log(valueInNumber_2);
console.log(typeof valueInNumber_2);

console.log("3");
let score_3 = undefined;
let valueInNumber_3 = Number(score_3);
console.log(valueInNumber_3);
console.log(typeof valueInNumber_3);

console.log("4");
let score_4 = null;
let valueInNumber_4 = Number(score_4);
console.log(valueInNumber_4);
console.log(typeof valueInNumber_4);

console.log(1 + 2 + "2");
console.log(1 + "2" + "2");
console.log(1 + "2" + 2);
console.log("1" + 2 + 2);

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);
gameCounter++;
console.log(gameCounter);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
