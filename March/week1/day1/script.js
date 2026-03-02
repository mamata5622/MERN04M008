console.log("Welcom to loop world");

// while
let i=1;
while(i<=5){
    console.log(i)
    i++;
}
// do while loop
let a=i;
do{
console.log(a)
a++
}
while(a<=10)

// Extra loop in js
// for-in(index)
// for-of(iterable statement)

let obj={
    name:"abc",
    age:30,
    email:"abc@gmail.com"
    // "full name":"abc junnu"
}
// for in with obj
for(let key in obj){
    console.log(obj[key]);
}
// for in with arr
let arr=[1,2,3,4,5];
for(let idx in arr){
    console.log(arr[idx])
}

// for of (value)
let arr1=[1,2,"hiee",true];
for(let v of arr1){
    console.log(v)
}

// we can create the string by two ways 
// =>literal (double quote, single quote, back tick)
// =>By using the "String" object  

let str1="string 1";

let str3="string 3";
console.log(str1)

let str4=new String("string4");
console.log(str4.valueOf());

let str2="string 2";
console.log(str2[0])

// let v=9;
// v=20;
// console.log(v)

// let std={
//     name:"manav"
// }

// console.log(std.name)
// std.name="bhola"
// console.log(std.name)

str2[0] = "Ca";
console.log(str2)

//string is immutable(we cant change the value of a particular index)