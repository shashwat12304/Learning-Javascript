// trim
// to uppercase
// to lowercase
// slice
let firstname = "    harshit        ";
//trim method is used to remove the spaces in you string
//It's important to know that in JavaScript, strings are immutable. 
//This means that once a string is created, its contents cannot be changed.
// So the trim will not change the firstname string insteam it will return a new trimmed string
console.log(firstname.length);
firstname = firstname.trim();//"harshit", Note reassignment is possible but redeclaration is not possible with let
console.log(firstname.length);
firstname.toUpperCase();
console.log(firstname.toUpperCase());
//similarly firstname.toUpperCase() also returns a string and does not does a change to the original string
console.log(firstname.toLowerCase());
// slice means I want a particular set of continous characters from my string
// start index
// last index
// slice(start index, end index +1)
// because slice(0,4) in firstname will return hars and not harsh
console.log(firstname.slice(0,5));