console.log("hello,good morning")

let button=document.querySelector("button");
console.log(button)
button.addEventListener("click",(e)=>{
    console.log("click")
    console.log(e.target)
    console.log(e)
    console.log(e.clientX)
    console.log(e.clientY)
})

// let para=document.querySelector("p");
// console.log(p)
// para.addEventListener("mousemove",(e)=>{
//     console.log("e")
// })

document.addEventListener("keydown",(e)=>{
    console.log(e.key);
    console.log(e)
})

let form=document.querySelector("form");
console.log(form);
form.addEventListener("submit",(e)=>{
    console.log(e)
    e.preventDefault()
})

let input=document.querySelector("input");
input.addEventListener("input",(e)=>{
    console.log(e)
})

// window.addEventListener("DOMContentLoaded",()=>{
//     console.log(e)
// })

let form1=document.querySelector(".reg-form")
console.log(form1)

form1.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(e)
    let name=e.srcElement.elements[0].value;
    let age=e.srcElement.elements[1].value;
    let email=e.srcElement.elements[2].value;

    console.log(name,age,email)

    localStorage.setItem("user",JSON.stringify({name,age,email}));
})