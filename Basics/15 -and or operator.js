// ---------------------------------------------------------- AND OR OPERATOR --------------------------------------------------------------//
let firstname = "shashwat";
let age = 19;
// and (&&) is kind of multiplication and or (||) is addtion, used to use two or more conditions together
// for example in the following if statement, condition 1 is true and condtion 2 is true as well, so 1*1 = 1, so the block of code inside the
// if statement will be executed
if(firstname[0]==='s' && age>18){
    console.log("The name starts with s and the age is over 18");
}
// but the following code will not execute
if(firstname[0]==='A' && age>18){
    console.log("The name starts with A and the age is over 18");
}else{
    console.log("The name does not start with A or the age is  not over 18");
}
// but the following code will execute, example of OR (0+1=1)
if(firstname[0]==='R' || age>18){
    console.log("The name starts with R or/and the age is over 18");
}