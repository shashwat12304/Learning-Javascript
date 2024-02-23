//--------------------------------------------------------BOOLEANS AND COMPARISON OPERATORS-----------------------------------------------------//
// booleans - either true of false
let num1 = 5;
let num2 = 3;
console.log(num1>num2); //this kind of line either returns true or false, this one true
let num3 = 5;
console.log(num1<=num3);// return true
//-------------------------------------------------------------  == VS ===  ---------------------------------------------------------------------//
// we use == when we want to check if two numbers are equal to each other or not
let num4 = "5";
// following line will return true
console.log(num1==num4);
// == only compares the value and not the datatype unlike other programming languages, for example following line will not throw an error
console.log(num1==num4);
// === is used when you want to check if the datatype is equal as well
// for example the following line on execution will return false as answer
console.log(num1===num4);
// ----------------------------------------------------------- != VS !== -----------------------------------------------------------------------//
console.log(num1!=num4);
// similarly 1= also only checks the value and not the datatype, if you want to check the datatype as well then use !==
console.log(num1!==num4);