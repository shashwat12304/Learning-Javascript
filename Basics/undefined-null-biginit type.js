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