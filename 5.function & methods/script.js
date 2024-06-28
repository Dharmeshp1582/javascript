// console.log("hello!");

//  "abc".toUpperCase();
//  "xyz".toUpperCase;

//  [1,2,3].push(4);


//step for creating function in js
//function definition(1)
//function functionName(){
    //do some work
//}

//function definition(2)
//function functionName(param1,param2 ,etc){
//do  some work
//} 

//function call / invoke function
//functionName(); 


//example - 1

function myFunction(){
    console.log("welcome to my universe!");
    console.log("we are learning js:)");
} 

myFunction();
myFunction(); 
myFunction();
myFunction();
myFunction();
myFunction();


//ex -2

//function myFunction(msg){
    //parameter -> input
  //  console.log(msg);
    //console.log(msg * n); //error
//}

// myFunction("I love javascript");


//example - 3 -> 2 number ,sum

function sum(a,b){
    console.log(a+b);
}

sum(122,125); //247


//exaple - 3.1 -> 2 number , sum

function sum(a,b){
    s = a + b;
    console.log("before returning");
    return s;
    //console.log("after returning");//not executed after return statement
}

let val = sum(122,125); 
console.log(val);//247


//arrow functions -> Compact way of writing a function

const functionName = (param1, param2) => {
 //do some work
};


//ex-1 

//simple way of writing a function
//sum function
function sum(a,b){
    return a + b;
} 

//multiplication function
function mul(a,b){
    return a*b;
}

//arrow functions (parts of modern functions)
// const x =5 ;//ex
// console.log(x);//ex

//arrow functions -> for sum
 const arrowSum = (a , b) => {
    console.log(a + b);
   //return a + b;
}; 

arrowSum(4,5);

//arrow functions -> for multiplication
const arrowMul = (a,b) => {
    //console.log(a * b);
    return a * b;
};

arrowMul(5,6);

const printHello = () =>  {
    console.log("Hello");
};


//html - structure
//css -styles
//javascript - logic