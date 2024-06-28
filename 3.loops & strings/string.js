let obj = {
    item : "pen",
    price:10,

};

let output  ='the cost of  ${obj.item} is ${obj.price} rupees';
//console.log(output); 

console.log("the cost of", obj.item,"is", obj.price,"rupees");

let specialString = (`this is a template literal ${3*6}`);
console.log( typeof specialString);//string
console.log(specialString); 

let str = "Dharmesh\tpatel";
let str2 = "kumar";
console.log("Dharmesh\npatel");  //new line 
console.log("Dharmesh\tpatel"); //for space between two characters
console.log(str.length); //length of string

console.log(str.toUpperCase()); //for converting to upper case
console.log(str.toLowerCase()); //for converting to lower case
console.log(str.trim()); //removes leading and trailing spaces
console.log(str.slice(3, str.length));  //for choosing particular parts of string
console.log(str.concat(str2)); //joining two or more strings into a single string
console.log(str.replace("h","m")); //replace h with m only 1 time 
console.log(str.replaceAll("h","m"));//replace h with m all times
console.log(str.charAt(3));//print characters at specific positions

str = str.replace("h","m"); 
console.log(str); //replace h with m only 1 times

console.log(str.replaceAll("h","m"));
console.log(str);//replace h with m all times
