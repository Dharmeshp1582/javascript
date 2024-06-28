let marks = [77,66,34,87,67];

let sum = 0;

for(let val of marks){
    //console.log(val);
    sum += val;
}

let avg = sum /marks.length;
console.log(`avg marks of the class=${avg}`);