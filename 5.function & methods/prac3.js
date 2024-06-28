/* We are given array of marks of students.filter our of the marks of students  that scored 90. */

let marks = [97,65,37,99,67,77];

let toppers =marks.filter((val)=>{
    return val > 90;
});

console.log(toppers);//97,99