console.log("12th of march")

// Convert a sentence into camelCase. 

let arrStr=["i love javascript"];
let newarr=arrStr.map((a,i)=>a.split(" "))


// Find the first non-repeating character in a string. 

let str="aabbcddee";
for(let char of str){
    if(str.indexOf(char)===str.lastIndexOf(char)){
        console.log(char)
    }
}

//  Find the second largest number in an array. 

let num=[4,5,7,2,8,19];
num.forEach((a,i)=>{
    console.log(a)
})
let large=Math.max(num)
console.log()

let max=0;//4 //5
let second=0
for(let v of num){
    if(v>max){
        second=max
        max=v
    }
}
console.log("max value ",max)
console.log(second)

// Merge two arrays and remove duplicates. 
let a=[1,2,3,4];
let b=[2,3,4];
let merge=a.concat(b).filter((dup,i)=>a.indexOf(dup)===i);
console.log(merge)

// Find all numbers greater than 10 in an array. 

let arr=[4,5,7,6,10,44,15,25];
arr.forEach((num,i)=>{
    console.log(num)
})
let greaterthan10=arr.filter((num)=>num>10)
console.log(greaterthan10)

