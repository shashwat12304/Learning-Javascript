//In strings when we want to include values from some variable then put the string in  back ticks and use &{variable_name}
// for example I want to create a about me section by storing the values in variables and without using +operator (string concatenation)

let firstname = "Shashwat";
let age = 19;
let aboutme = `My name is ${firstname} and I am currently ${age} years old`;
console.log(aboutme);
