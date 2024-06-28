/* Get user to input a number using prompt ("Enter a number").check if the number is multiple of 5 or not.*/

// alert("hello Dharmesh!");

const prompt = require(prompt-sync)();
let num = prompt("enter a number")

if(num%5 == 0) {
    console.log(num,"num is multiple of 5");
}
else{
    console.log(num,"num is not multiple of 5");
}