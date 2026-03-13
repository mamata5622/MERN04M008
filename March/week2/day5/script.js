let conObjs=document.getElementsByClassName("content");
console.log(conObjs[1])
console.log(conObjs[0].innerText);
console.log(conObjs[0].innerHTML);

let heading=document.getElementsByTagName("h1")
console.log(heading[0])

// quaryselector();
// queryselectorAll();
// nodelist vc collection

let h1=document.querySelector("#heading")
console.log(h1)

let allele=document.querySelectorAll(".content")
console.log(allele)
console.log(allele[1].className)
console.log(allele[1].tagName)
console.log(allele[1].childNodes)

console.log(allele[2].childNodes[1])

// there are 4 types of node(objects) in java-script

// text Node
// Comment node 
// Element node 
// document node

console.log(allele[2].children)
console.log(allele[2].children[0].innerText)
console.log(allele[2].children[0].textContent)
console.log(allele[2].children[0].parentNode)

let h2 = document.querySelector("#h2");
console.log(h2);
h2.innerText += "from qlith innovation student";
console.log(h2);