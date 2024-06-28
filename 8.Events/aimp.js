/*The change in state of an object is khown as an events.events are fired notify code of "interesting changes" that may affect code execution. */

//mouse events (click,double click etc...)
//keyboard events (keypress,keyup,keydown etc...)
//form events (submit etc...)
//print evnt & many more 


/* event handling in javascript */

/*node.event = () => {
    //handle here
} */ 

//EVENT OBJECT

/*it is a special object that has details about the event.
All event handlers have access to the event objects properties and methods.

node.event = (e) => {
    //handle here
}

e.target , e.type , e.clientX , e.clientY
*/


//Event Listeners

/* node.addEventListener(event, callback)
node.removeEventListener(event, callback)

*Note : the callback reference should be same to remove
*/

