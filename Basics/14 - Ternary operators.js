//------------------------------------------------------------------TERNARY OPERATORS----------------------------------------------------------//
let age = 8;
//Now in the following variable suppose I want to to store some value after applying some condition(do not use if else here)
//or suppose if we want to reduce the length of the code, we can use ternary(conditional) operators.
let drink =  age>=5 ? "coffee" :"milk";
// (condition)?(if true):(else if false)
// if the conditiom is true then the the string(or statement) after ? will be considered else statement after : will be considered
// for example the above condition is true and hence the coffee string will get stored inside te drink variable
console.log(drink);