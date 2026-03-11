console.log("11th of march")

// 1. Print each number multiplied by 2.

let arr=[1,4,7,8,5,2,-4];
arr.forEach((v,i)=>{
    console.log(v)
})
let multiplication=arr.map((mul)=>mul*2)
console.log(multiplication);

// 2. Print all words in uppercase from an array of strings.

let arrword=["apple","hello","i love js"]
arrword.forEach((a)=>{
    console.log(a)
})
let cap=arrword.map((upper)=>upper.toUpperCase())
console.log(cap);

// 3. Create a new array with the square of each number.

let square=arr.map((sqr)=>sqr*sqr)
console.log(square);

// 4. Convert an array of numbers into strings.

console.log(arr.toString())

// 5. Create a new array that contains the length of each word.

let eachword=arrword.map((each)=>each.length);
console.log(eachword)

// 6. Get all positive numbers from an array.

let positiveno=arr.filter(num=>num>0)
console.log(positiveno)

// 7. Get all even numbers from an array

let negativeno=arr.filter(num=>num<0)
console.log(negativeno)

// 8. Concatenate all strings in an array into one string.

let singleStr=arrword.join(" ")
console.log(singleStr)

// 9. Find the minimum number in an array.

let minimum=arr.reduce((a,i)=>Math.min(a,i))
console.log(minimum)

// 10. Check if all words have more than 3 characters.

let ismorethan3=arrword.map((word)=>word>3)
console.log(ismorethan3)

// 11. Check if any word starts with the letter "a". 

let hasa=arrword.some((start)=>start="a");
console.log(hasa)