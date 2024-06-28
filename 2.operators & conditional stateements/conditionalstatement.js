

//if statement
//ex-1
// let age =25;

// if(age>=18){
//     console.log("you can vote");
// }

// if (age<=18){
//         console.log("you can not vote");
// }


// //ex-2
// let mode = "dark";
// let color;

// if(mode=="dark"){
//     color = "black";
// }

// if(mode=="light"){
//     color = "white";
// }

// console.log(color);//dark




// //if-else statements
// //ex-1
// let mode = "white";
// let color;

// if(mode=="dark"){
//     color = "black";
// }
// else{
//     color = "white";
// }
// console.log(color);

// //ex-2

// let age =15;

// if(age>=18){
//     console.log("you can vote");
// }

// else{
//         console.log("you can not vote");
// }


//odd or even

//let num =10;
let num = 5;

if(num%2==0){
    console.log("even");
}
else{
    console.log("odd");
}


//else if statement

let mode = "dark";
let color;

if(mode=="dark"){
    color = "black";
}
else if(mode=="blue"){
color = "blue";
}
else if(mode=="green"){
    color = "green";
}
else{
    color = "red";
}

console.log(color);

if(mode=="dark"){
    console.log(mode);
}



let age =  25;

let result = age>= 18 ?"adult" : " not adult";
console.log(result);