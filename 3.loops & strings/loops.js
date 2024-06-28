// loops are used to execute a piece of code again and again

// for(let count = 1;count <= 100;count++) {
//     console.log("DHARMESH PATEL"); //100 execution
// }

//calculate sum of 1 to 7
//for loop example
// let sum = 0;
// for(let i = 1; i <= 7; i++){
//     sum =sum + i;
//     console.log("i=",i);
// }
// console.log("sum=",sum);
// console.log("loop has ended");


//while loop 
// let i =1;
// while(i<=5){
//    // console.log("i=",i);
//     console.log("DHARMESH");
//     i++;
//}

//do - while loop
// let i = 20;
// do{
//     console.log("Dharmesh");
//     i++;
// //}while(i<=10);//only 1 time executed
// }while(i<=25);

//for - of loop
//for finding individual elements from given string
// let str = "Javascript";

// for(let i of str){
// console.log("i=",i);
// }

// for finding size
// let size = 0;
// for(let val of str){
//     console.log("val=",val);
//     size++;
// }

// console.log("string size=",size);


//for in loop

let student ={
    name: "Rahul Kumar",
    age:20,
    cgpa:7.8,
    isPass:true,
};

for(let key in student){
    console.log("key=",key,"value=",student[key]);
}