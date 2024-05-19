"use script"; //treat all js code as per newer version

// alert(3+3) //we are using node.js not browser

console.log(3 + 3);

/* we should not write like because of code readability best practices:
console.log(3+
    3)
*/

/* ECMA script: standardisation of JS language secifications so that every browser follows a same readability */

let name = "hello"; //string datatype
let age = 18; //number data type

/* total number of datatypes:

number
bigint
string
boolean
null
undefined
symbol

object

 */

console.log(typeof null); //logs 'object'

console.log(typeof undefined); //logs 'undefined'

//make a number automatically bigint
let bigNum = 123n;
console.log(typeof bigNum);
