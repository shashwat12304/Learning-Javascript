//------------------------------------------------------------------IF-ELSE CONDITION----------------------------------------------------------//
// if else works in the way if the condition inside the paranthesis next to if statement is true then the if block is executed else the
// else block is executed and we often use the truthy and falsy values and comparison operators inside the condition paranthesis () to meet our
// goal objective.
let age = 19;
if(age>=18){
    console.log("User can play DDLC");
}else{
    console.log("you are under-age");
}

let num = 14;
console.log(9%3);// This is how we can check for remainders
if(num%2==0){
    console.log("The number is even");
}else{
    console.log("The number is odd");
}
//------------------------------------------------------USING TRUTHY AND FALSY VALUES-----------------------------------------------------------//
// Following values are considered as falsy values which means that when passed inside the condition paranthesis they will be evaluated as false:
// false, '',null, undefined,0
//For example the following code on execution will run the code inside the else block
let firstname = null;
if(firstname){
    console.log('Firstname is not empty');
}else{
    console.log("firstname is empty");
}
//TRUTHY VALUES- All else is truthy, for example some string or any number and so on