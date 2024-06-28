/* create a H2 heading element with text - "Hello javascript" . Append "from Apna college students" to this text using js*/

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from Apna college students";

/*Create 3 divs with common class name - "box".Access them & add some unique text to each of them  */

let divs = document.querySelectorAll(".box");

let idx = 1;
for(div of divs){ //for of loop used for print same element multiple times
    console.log(div.innerText);
    div.innerText = `new unique value ${idx}`;
    idx++;
}
console.log(divs[0]); 
divs[0].innerText = "new unique value 1";
divs[1].innerText = "new unique value 2";
divs[2].innerText = "new unique value 3";
