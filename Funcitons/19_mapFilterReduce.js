const users = [
  { firstName: "adil", lastName: "f", age: 10, roll: 34, isActive: true },
  { firstName: "binod", lastName: "g", age: 20, roll: 35, isActive: false },
  { firstName: "chad", lastName: "h", age: 30, roll: 36, isActive: true },
  { firstName: "dhawan", lastName: "i", age: 40, roll: 37, isActive: false },
  { firstName: "eshawar", lastName: "j", age: 50, roll: 38, isActive: true },
];

const output = users.map((user) => user.firstName.toUpperCase());

console.log(output);

const outputFilter = users.filter((user) => {
  if (user.roll > 35 && user.age > 2) return true;
});

console.log(outputFilter);

const outputReduce = users.reduce((acc, curr) => (acc += curr.age), 0);

console.log(outputReduce);

const outputFilter2 = users
  .filter((user) => user.roll > 35)
  .map((user) => String(user.firstName));

console.log(outputFilter2);

const outputTotal = users
  .filter((user) => user.roll > 34)
  .map((user) => user.roll)
  .reduce((acc, curr) => acc + curr, 0);

console.log(outputTotal);

for (i = 0; i < users.length; i++) {
  console.log(users[i].firstName);
}

users.forEach((user) => console.log(user.firstName.toUpperCase()));
