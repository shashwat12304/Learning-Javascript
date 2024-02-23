//----------------------------------------------------- NESTED IF ELSE -----------------------------------------------------------------------//
// let's build a game
let winnum = 19;// let the winning number be 19, if the user gusses the winning number right she/he wins
// if the usr guesses the number less we will return "too low" and if the user guesses the number large then required then return"too large"
// Let's use nested if else for building this game
let userguess = +prompt("Guess a number"); // using + to convert it into a number
console.log(typeof userguess,userguess);
// string came because the prompt takes input in string by default, put + before string to convert it into a number
if(userguess===19){
    console.log("your guess is right");
}else{
    if(userguess<19){
        console.log("your guess is too low");
    }else{
        console.log("your guess is too high");
    }
}