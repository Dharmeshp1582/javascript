console.log("hello!");
window.console.log("hello2!");
// console.dir(window.console);
// console.dir(window.document);  


console.dir(document.Body.childnodes[1]); 
document.body.childNodes[3].innerText = "ABCD";  // use to chage heading in html document

alert("you are now in danger mode!"); //it creates an alert notification which see before our documentation

let heading = document.getElementById("heading");//h1
console.log(heading);

let headings = document.getElementsByClassName("heading2"); //it returns html collections
console.dir(headings);
console.log(headings); 

let myid = document.getElementById("myid");
console.dir(myid);
console.log(myid); 

let parag = document.getElementById("parag");
console.dir(parag); 
console.log(parag);  

let fisrtEl = document.querySelector("p");//1st element of matching with id
console.dir(fisrtEl);

let allEl = document.querySelectorAll("p"); // It returns nodelist of all elements
console.log(allEl);

//tagName - returns tag for element nodes
//innerText - returns the text content of the element and all its children
//innerHTML - returns the plain text or html content of the element
//textContent - returns textual content even for hidden elements
