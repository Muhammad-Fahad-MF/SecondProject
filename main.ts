#! /usr/bin/env node

//Generating random number using math.random() which works on pseudo algorithm

let rndnum = Math.floor(Math.random() * 10 + 1);
console.log("Number Guessing Game \n  Chances are 10%")

import inquirer from "inquirer";

//Taking input from user
const gnum = await inquirer.prompt([{
    message : "Guess a Number :",
    type : "number",
    name : "user"
}])
//Checking whether input is matched or not
if(gnum.user == rndnum){
    console.log("Congratulations! You Guessed The Right Number")
}
else {
    console.log("Better Luck Next Time!") 
}
