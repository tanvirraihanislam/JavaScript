//push
let array_1 = [1, 2, 3, 4, 5];
let array_2 = [6, 7, 8, 9, 10];
let count = array_1.push(8);
console.log(count, "    ", array_1);

//concat
array_1.concat(array_2);
let array_concat = array_1.concat(array_2);
console.log(array_concat);

//flat
let array_3 = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10, [11, 12]], 16];
let array_flat = array_3.flat(Infinity);
console.log(array_flat);

//from
console.log(Array.from("Hello"));
console.log(Array.from({ name: "hello" }));

//of
console.log(Array.of("hello", 4, true));
