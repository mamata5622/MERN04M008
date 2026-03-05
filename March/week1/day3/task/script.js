console.log("5th of march")
// 1.Create an array `[10, 20, 30]`. Add `40` at the end of the array.
let numArr=[10,20,30];
numArr.push(40);
console.log(numArr);

// 2.Given the array `["red", "blue", "green"]`, remove the first element.
let arr=["red","blue","green"];
arr.shift("red");
console.log(arr)

// 3.Combine the arrays `[1, 2, 3]` and `[4, 5, 6]` into a single array.
let arr1=[1,2,3];
let arr2=[4,5,6];
// console.log(arr1.concat(arr2))
console.log([1,2,3].concat([4,5,6]));

// 4.From the array `[10, 20, 30, 40, 50]`, create a new array containing the first three elements.
let arr3=[10,20,30,40,50];
console.log(arr3);

let arr4=new Array(3);
arr4[0]=10;
arr4[1]=20;
arr4[2]=30;
console.log(arr4)


// 5.From `["HTML", "CSS", "JS", "React"]`, remove `"JS"`.
let web=["HTML","CSS","JS","React"];
console.log(web)
web.splice(2,1)
console.log(web)

// 6.In `["apple", "banana", "mango"]`, replace `"banana"` with `"grape"`.
let fruits=["apple","banana","mango"];
fruits.splice(1,1,"grape");
console.log(fruits);

// 7.Convert the array `["Hello", "World", "JS"]` into a string.
let arr5=["Hello","world","JS"];
console.log(arr5.toString())

// 8.Create an array with 5 elements where all elements are `0`.
let ele=[4,5,2,1,3];
console.log(ele);
ele.fill(0)
console.log(ele)

// 9.From `[1, 2, 3, 4, 5]`, create a new array containing the last two elements.
let num=[1,2,3,4,5];
console.log(num);
let num1=new Array;
num1[0]=4;
num1[1]=5;
console.log(num1)

// 10.Extract elements from index `1` to `3` from `[10, 20, 30, 40, 50]`.
let x=[10,20,30,40,50];
console.log(x.slice(1,4));