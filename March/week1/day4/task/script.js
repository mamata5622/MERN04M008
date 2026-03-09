console.log("6th of march")

// 1. Create an array of 5 fruits.
// Print the first and last elements using indexing.

let fruits=["mango","grape","apple","orange","banana"];
console.log(fruits[0],fruits[fruits.length-1]);

// 2. Add `"Mango"` to the end of the array using `push()` and `"Kiwi"` to the start using `unshift()`.

fruits.push("mango");
fruits.unshift("Kiwi");
console.log(fruits);

// 3. Use `indexOf()` to find the position of `"Banana"` in an array.

console.log(fruits.indexOf("banana"));

// 4. Use `includes()` to check if `"Orange"` exists in the array.

let hasorange=fruits.includes("orange");
console.log(hasorange);

// 5. Convert an array of numbers `[1,2,3,4,5]` into a string separated by “-” using `join()`.

let num=[1,2,3,4,5];
console.log(num.join("-"));

// 6. Given an array `[1, 2, 3, 2, 1, 4, 5]`, remove duplicates.

let arr=[1,2,3,2,1,4,5];

// 7. Given an array of strings, return the one with the longest length.


// 8. Reverse a string using array methods (`split()`, `reverse()`, `join()`).

let str="Apple Ball Cat Dog";
let splstr=str.split(" ");
console.log(splstr)
let revstr=splstr.reverse()
console.log(revstr.join())

// 9. Count how many even numbers exist in `[2, 5, 8, 11, 14, 17, 20]`.
let number=[2, 5, 8, 11, 14, 17, 20];
let count=0;
for(let i=0;i<number.length;i++){
    if(number[i]%2===0){
        count++;
    } 
}
console.log("no of even nums existing:",count)

// 10. Create a new array that contains the length of each string from `["React", "Node", "MongoDB"]`.

let web=["React","Node","MongoDB"];
let webdev=[]
for(let i=0;i<web.length;i++){
    webdev.push(web[i].length);
}
console.log(webdev);

// 11. Convert `[1,2,3,4,5]` → `[5,10,15,20,25]`

for(let i=0;i<num.length;i++){
    if(num[i]){
       num[i]*=5 
    }
    console.log("convert",num)
}
// 12. Replace all negative numbers in `[4, -2, 6, -9, 7]` with `0`.

let no=[4, -2, 6, -9, 7];
for(i=0;i<no.length;i++){
    if(no[i]<0){
        no[i]=0
    }
    console.log(no)
}