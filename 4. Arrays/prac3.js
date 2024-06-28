let compnies = ["netflix","google","amazon","prime","IBM"];

console.log(compnies);

//remove first element
compnies.shift();
console.log(compnies); 

//remove index 2 element and add ola at that position
compnies.splice(2,1,"ola");
console.log(compnies);

//add amazon at the end of the list
compnies.push("amazon");
console.log(compnies);