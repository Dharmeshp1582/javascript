// let foodItems = ["potato","apple","orange","tomato"];

// console.log(foodItems);
// let deletedItem = foodItems.pop();
// console.log(foodItems);
// console.log("deleted",deletedItem); 


let marvel_heroes = ["thor","ironman","spiderman"];
// let dcHeroes = ["superman","batman"];
// let indianHeroes = ["krishh","shaktiman"];

// let heroes = marvel_heroes.concat(dcHeroes , indianHeroes); 
// console.log(heroes);

marvel_heroes.unshift("antman");//add antman in marvel_heroes
console.log(marvel_heroes);

let val = marvel_heroes.shift();
console.log("deleted",val);

// console.log(marvel_heroes.slice(1,3));//print index 1 to 3 string
// console.log(marvel_heroes.splice(2,3,102)); 

let arr =[1,3,2,5,7];

//Add element
arr.splice(2,2 ,101,103); 
console.log(arr);

//delete elements
arr.splice(3,1);
console.log(arr);

//Replace elements
arr.splice(3,1,101);  
console.log(arr);

