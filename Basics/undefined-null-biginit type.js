//------------------------------------------------------EXPLORING UNDEFINED------------------------------------------------------------//
// when we initialize a variable and do not assign it a value then typeof variable will be undefined, whether we define it with let or var
// but this does not work with const, we have to initialize/assign value to the const variable otherwise it will throw an error

let x;
var y;
// output is undefined
console.log(typeof x);
// output is undefined
console.log(typeof y);
// Following 2 lines will throw an error on execution(Uncaught SyntaxError: Missing initializer in const declaration)
// const z;
// console.log(typeof z);
x  = "Shashwat";
console.log(typeof x, x);// printing more than one thing in console.log
// Now the output will be string
// --------------------------------------------------------EXPLORING NULL----------------------------------------------------------------//
// THE DIFFERENCE: Undefined is automatically assigned to a variable that is declared but has not been assigned a value, 
// while null is assigned manually to indicate the intentional absence of a value.Null in JavaScript means an empty value and is 
// also a primitive type in JavaScript. The variable which has been assigned as null contains no value.
// Undefined, on the other hand, means the variable has been declared, but its value has not been assigned.
let myvar = null;
console.log(myvar,typeof myvar);
// Why we are getting the typeof myvar as null? Object is a reference datatype in JS
// this is a bug/error in JS, we need to remember that the typeof null variable is null and not Object
// Why we have not changed/corrected this bug, because it will affect existing faremworks and all the codes built using JS,and ee need to do 
// changes there as well, so let it be.
//-------------------------------------------------------EXPLORING BIGINT------------------------------------------------------------------//
//Bigint has been recently been added to JavaScript in 2020
//There is a limit to the size of numbers you can store in JavaScript, which can be found by following line of code
console.log(Number.MAX_SAFE_INTEGER);
//If you want to store a number bgger than this than store it using BigInt primitive data type, samller numbers can be stored using this as well
let mynum = BigInt(2323343444645646475766568688868868687);
console.log(mynum);
//There are two ways to store a BigInt number, one is using BigInt()constructor and second is to put n behind it.
let mynum2=34333434534344534435n;
console.log(mynum+mynum2);
// We cannot mix BigInt with other datatypes, for examaple the following two lines of code with through Uncaught TypeError on executed.
// let num3 = 12;
//console.log(mynum+num3);
