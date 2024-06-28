/* Create a function using the "function" keyword that takes a string as an argument and returns the number of vowels in the string. */

function countVowels(str){
    let count = 0;
    //"DharmeshPatel",count = 1
    for(const char of str){
        if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u" || char == "A" || char == "E" || char == "I" || char == "O" || char == "U"){
            count ++; 
        }
    } 
    console.log(count);
}
countVowels("DharmeshPatel"); //4
countVowels("Adonisvirgo");//5

/* Create an arrow function to perform the same task . */

const countVow =(str) => {
    let count = 0;
    //"DharmeshPatel",count = 1
    for(const char of str){
        if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u" || char == "A" || char == "E" || char == "I" || char == "O" || char == "U"){
            count ++; 
        }
    } 
    console.log(count);

}
countVow("DharmeshPatel"); //4
countVow("Adonisvirgo");//5
countVow("darshan");//2