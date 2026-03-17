console.log("hello,good morning")

// there are three parts of event 
// 1.target body 
// 2.event name (mouse event,key event,form event etc)
// 3.how the handle the event 

let button=document.querySelector("button");
console.log(button)

// button.onclick=()=>{
//     // console.log("hello")
//     document.body.style.backgroundColor="blue"
//      let h1=document.createElement("h1");
//     h1.innerText="byee"
//     document.body.append(h1);
// }

// button.onclick=()=>{
//     let h1=document.createElement("h1");
//     h1.innerText="byee"
//     document.body.append(h1);
// }

// let obj={
//     name:"abc"
// }

// obj.name="hiee";
// console.log(obj.name)
// obj.name="byy";
// console.log(obj.name)

// addEventListener() 

button.addEventListener("click",()=>{
    document.body.style.backgroundColor="blue"
})

button.addEventListener("click",()=>{
    let h1=document.createElement("h1");
    h1.innerText="hello"
    document.body.append(h1);
})

button.addEventListener("click",()=>{
    document.body.style.color="white"
})

// different types of event 
// mouseevent  
// =>click
// =>dbl click
// =>mouseup
// =>mousedown
// =>mouseenter
// =>mouseLeave

let para=document.querySelector("p")
console.log(para)

// para.addEventListener("dblclick",()=>{
//     console.log("ho raha hai")
// })

para.addEventListener("mousedown",()=>{
    console.log("mouse down")
})

para.addEventListener("mousemove",()=>{
    console.log("mouse move")
})

para.addEventListener("mouseenter",()=>{
    console.log("mouse enter")
})

para.addEventListener("mouseleave",()=>{
    console.log("mouse leave")
})

// form event //input event

// submit (form event)

// input (input events)
// change
// focus
// blur

let form=document.querySelector("form");
form.addEventListener("submit",()=>{
    console.log("form submitted")
    e.preventDefault()
})

let input=document.querySelector("input");
console.log(input)
// input.addEventListener("change",()=>{
//     console.log("input is changing")
input.addEventListener("input",()=>{
    console.log("input event")
})

input.addEventListener("focus",()=>{
    input.style.backgroundColor="green"
})

input.addEventListener("blur",()=>{
    input.style.backgroundColor="red"
})

// key event
// keyup
// keydown
// keypress

document.addEventListener("keydown",()=>{
    console.log("keydown")
})

document.addEventListener("keypress",()=>{
    console.log("keypress")
})

// window event
// =>load
// =>DomConetentLoaded
// =>scroll
// =>resize

window.addEventListener("load",()=>{
    console.log("this page loaded")
})
window.addEventListener("DOMContentLoaded",()=>{
    console.log("dom content loaded")
})
window.addEventListener("scroll",()=>{
    console.log("scroll event")
})
window.addEventListener("resize",()=>{
    console.log("resize page")
})