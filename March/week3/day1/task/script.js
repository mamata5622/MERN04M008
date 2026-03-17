console.log("good evening")

let lists=document.querySelector("#list")
console.log(lists)

let li1=document.createElement("li")
li1.innerText="new item1";
console.log(li1);

let li2=document.createElement("li")
li2.innerText="new item2";
console.log(li2)

lists.append(li1, li2)

console.log(lists)

let btn=document.querySelector("button")

btn.addEventListener("Add item",()=>{
    lists.toggle()
})
