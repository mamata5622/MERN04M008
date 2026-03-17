console.log("17th of march")

// Create a button. When the user clicks it, show an alert saying "Button Clicked!" 

let btn=document.querySelector("button");
console.log(btn);

btn.addEventListener("click",()=>{
    console.log("Button Clicked!")
})

// Create a paragraph. When you double-click, change its text color to red. 

// let para=document.createElement("p")
// para.innerText="this is paragraph";
// document.body.appendChild(para)
// console.log(para)

let para=document.querySelector("p")
console.log(para)
para.addEventListener("dblclick",()=>{
    para.style.color="red";
})

// Create an input field. When the user types, log the value in the console using the input event.

let inputfield=document.createElement('input');
document.body.appendChild(inputfield)
console.log(inputfield)

inputfield.addEventListener('input',()=>{
    console.log('value')
})


// Create a button. When the mouse enters the button, change its background color. 

let button=document.createElement("button")
button.innerText="When the mouse enters the button, change its background color."
document.body.appendChild(button)
button.addEventListener("mouseenter",()=>{
    button.style.backgroundColor="blue";
})

// Create a button. When the mouse leaves, reset the background color.

button.addEventListener('mouseleave',()=>{
    button.style.backgroundColor=''
})