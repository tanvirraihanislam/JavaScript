/*
//global scope
function abc() {
  //function scope
}
//var is function scope, let and const are block scoped
{
  var c = 7;
  const a = 5;
  let b = 6;
  console.log(c); //prints 7
  console.log(a); //prints 5
  console.log(b); //prints 6
}
console.log(c); //prints 7
console.log(a); //error
console.log(b); //error

*/

function test() {
  let z = "hello";
  if (true) {
    let z = "Hi";
    console.log(z);
  }
  console.log(z);
}
test();

//let
/* reference error
console.log(beforeReference);
let beforeReference = 0;
*/
let a = 0;
function number() {
  let a = 1;
  console.log(a);
}
number();
console.log(a);

//const
/* reference error
console.log(beforeReferenceConst);
const beforeReferenceConst = 0;
*/
const b = 0;
function bumb() {
  const b = 1;
  console.log(b);
}
bumb();
console.log(b);

//var

var c = 0;
function cumc() {
  var c = 1;
  console.log(c);
}
cumc();
console.log(c);

//we can shadow var by using let but not let by using var
//shadow let variable by using var variable : 'Illegal Shadowing'
/* function test1() {
  var a = "Hello";
  let b = "bye";
  if (true) {
    let a = "hi";
    var b = "gb";
    console.log(a);
    console.log(b);
  }
}
*/
