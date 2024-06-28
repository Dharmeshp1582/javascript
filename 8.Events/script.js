let btn1 = document.querySelector("#btn1");

/* btn1.onclick = () => {
    console.log("btn1 was clicked");
   let a = 25;
   a++;
   console.log(a);
}; */


// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clickx,evt.clicky);
  //  console.log("HANDLER");
//};


/*btn1.onclick = () => {
    console.log("HANDLER2");
}; */

/*let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside a div");
};
*/

// let div = document.querySelector("div");
// div.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clickx,evt.clicky);
//    // console.log("you are inside a div");
// };

// btn1.addEventListener("click", (evt) => {
//     console.log("button1 was clicked");
//     console.log(evt);
//     console.log(evt.type);
// });

btn1.addEventListener("click", (evt) => {
    console.log("button1 was clicked  - Handler1");
});

btn1.addEventListener("click", (evt) => {
    console.log("button1 was clicked  - Handler2");
});

btn1.addEventListener("click", (evt) => {
    console.log("button1 was clicked  - Handler3");
});

btn1.addEventListener("click", (evt) => {
    console.log("button1 was clicked  - Handler4");
});