// Write JavaScript code to select a paragraph using getElementById() and change its text. 

let para=document.getElementById("text")
console.log(para);
para.innerText+=" good morning";
console.log(para.textContent)

// Use getElementsByTagName() to count how many <p> tags exist on the page. 

let count=document.getElementsByTagName("p").length
console.log("present tag are :",count)

// Write JavaScript code to count how many child elements exist inside a div using children. 

let countChildEle=document.getElementById("box");
console.log("present childnode are :",countChildEle.childNodes.length)

// Create a div with spaces and elements and log childNodes and children in console. 

console.log(countChildEle.childNodes);
console.log(countChildEle.children);