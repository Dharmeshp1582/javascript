// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);


// let name = div.getAttribute("name");
// console.log(name);

//let para = document.querySelector("p");
//console.log(para.getAttribute("class")); //to Get the attribute value

/* getAttribute(attr) -> to Get the attribute value*/
/* setAttribute(attr,value) -> to Set the attribute value */

//let para = document.querySelector("p");
//console.log(para.setAttribute("class","newClass"));//to Set the attribute value 

// let div = document.querySelector("div"); 
// //console.log(div);

// div.style.backgroundColor = "green";//to change the background color of the div property
// div.style.fontSize = "20px"; //to change the font size of the div property
// div.innerText = "Hello world!";//to change the inner text of the div property


// let newBtn = document.createElement("button"); 
// newBtn.innerText =  "click me!";
// console.log(newBtn);

// let div = document.querySelector("div");
//div.append(newBtn);  //adds at the end of the node(inside)
//div.prepend(newBtn); //adds at the start of the node(inside)
//div.before(newBtn); //adds at the start of the node(outside)
//div.after(newBtn); //adds at the end of the node(outside)
//div.remove(newBtn); //removes div properties from the node


let newHeading = document.createElement("button"); 
newHeading.innerHTML =  "<i>Hi , I am new!</i>";
//console.log(newHeading); 

document.querySelector("body").prepend(newHeading); 
newHeading.remove();
