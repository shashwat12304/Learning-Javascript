// let keyword 
// declare variable with let keyword 
// 90%  of the time we use let keyword, reasons and comparison between let and var discussed later
let firstName = "Shashwat";
firstName = "Avi";
console.log(firstName);

// we can use var for same variable name more than once but it is not the case for let
// Case 1: Using var
// var firstName = "Shashwat"
// var firstName = "Avi" 
// this will not throw an error

// Case 2: Using let
// let firstName  = "Shashwat"
// let firstName  = "Avi"
// this will throw an error
// block scope vs funtion scope (covered later in this video)