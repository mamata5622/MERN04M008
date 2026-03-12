console.log("10th of march")

// Capitalize First Letter of Every Word

let arrstr=["i love javascript"];
arrstr.forEach((word,i)=>{
    console.log(word)
})
let cap=arrstr.map((word)=>{
    
})


// Find the Most Frequent Element

let arr=[1,4,2,5,1,7,3,1,8,56,4];


// Group Numbers (Even and Odd)

let even=arr.filter((num)=>num%2===0);
let odd=arr.filter((num)=>num%2!==0);

console.log(even)
console.log(odd)
console.log(even.concat(odd))
 
// From an array of numbers, return only numbers greater than 50 using function

let greater=arr.filter((num)=>{
    return num>50;
})
console.log(greater)

// Calculate the total price of products in a array using function.

let products = [
    { name: "pen", price: 10 },
    { name: "book", price: 50 },
    { name: "Bag", price: 100 }
]

// calculate the total price of all products
let totalPrice = products.reduce((sum, curr) => sum + curr?.price, 0);
console.log(totalPrice)

// Replace all spaces in a sentence with hyphens (`-`) in a string.

let str="a b c d e";
let substitute=str.replaceAll(" ","-")
console.log(substitute)

// what are the types of function ?
// what is function currying ?
// what is the benefits of a function ?
// what is the Higher order Function explain any add some example ?