// 1. Add a click event to a div and log the event type using event object.

let cont=document.querySelector("#box");
console.log(cont);
cont.addEventListener("click",(e)=>{
    console.log("click")
    console.log(e)
})

// 2.Write a program to display the tag name of the clicked element using `event.target.`

// console.log(e.target)

// 3. Track mouse movement and print X and Y coordinates.

let input=document.createElement('input');
document.body.appendChild(input)
console.log(input);
input.addEventListener('mousemove',(e)=>{
    console.log(e.clientX)
    console.log(e.clientY)
    console.log(e)
})