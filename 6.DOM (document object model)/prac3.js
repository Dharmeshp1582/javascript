let newBtn = document.createElement("button"); 
newBtn.innerText =  "click me!";
console.log(newBtn);

newBtn.style.color = "red";
newBtn.style.backgroundColor = "white";

document.querySelector("body").prepend(newBtn);