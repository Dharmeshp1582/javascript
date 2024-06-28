/* For a given array of numbers , print the square of each value using the forEach loop. */ 
/*
let nums = [2,3,4,5,6];

nums.forEach((num) => {
    console.log(num * num);
});// 4,9,16,25,36

let numb = [22,33,44,55,66];

numb.forEach((num) => {
    console.log(num * num);
});
*/

//some more Array methods
//Map method- Creates a new array with the results of some operations. the value its callback returns are used to form new array.

/*
let newArr = arr.map((val) => {
    return val*2;
})
*/

// let nums = [67,44,65];

// let newArray = nums.map((val) => {
//    return val * 2;
//     //console.log(val);
// });

// console.log(newArray);

// let calcSquare = (num) => {
//  console.log(num * num);
// };

//console.log(calcSquare);


//filter methods - Creates a new array of elements that give true for a condition/filter .

/*
let arr = [1,2,3,4,5,6,7,8,9];

//even array lists
let evenArr =  arr.filter((val) => {
    return val % 2 === 0;
});

console.log(evenArr);//2,4,6,8
*/

//odd array list
/*
let oddArr =  arr.filter((val) => {
    return val % 2 !== 0;
});

console.log(oddArr);//1,3,5,7,9
*/

//conditional array list
/*
let condArr =  arr.filter((val) => {
    return val > 3;
});

console.log(condArr);//4,5,6,7,8,9
*/

//reduce - performs some operations & reduce the array to a single value.It returns that single value.

//for sum 
/*
let arr = [1,3,4,5];

const output = arr.reduce((res,curr) => {
 return res + curr;
});

console.log(output); //result+current = sum = 13
*/

//Code for finding the largest element from list

let arr = [1,3,4,5];

const output = arr.reduce((res,curr) => {
 return res > curr ? res : curr;
});

console.log(output); // 5

