// typeof operator
// It tells the datatype of the data stored in the variable passed as argument

//PRIMITIVE DATA TYPES
// string, numbers, booleans, undefined,null, BigInt, Symbol

let age = 22;
let firstname = "harshit";
console.log(typeof age);
console.log(typeof(firstname));// both ways work


//Conversions

// Convert number to String
// If we add an empty string to a number then it gets converted to a string
// 22 + "" -> "22"
console.log(typeof(firstname+""));
// Another way of doing that is using String(variable) to convert to string



// Convert a String to a Number
//If we add + before the string then it gets converted to a string
// Similarly, we can use Number(variable) as well for this conversion
let mystr  = "shashwat";
console.log(typeof mystr);
mystr = +"shashwat";
console.log(typeof mystr);
