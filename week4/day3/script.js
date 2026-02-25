console.log("hello")

// way of the declaration

// var
var v;
v=40;
console.log(v);

var a=50;
console.log(a);

var a="Hello";
a="bye"
console.log(a);

// let
let b;
b=70;
console.log(b);

// let b;
b=90;
b=100;
console.log(b);

// const
const n = 60;
console.log(n)

// data type
// primitive
// Number

let num=9;
console.log(typeof typeof num)

// string 
let str="hello";
console.log(typeof str);

// Boolean
let isPassed=true;
console.log(isPassed);

// undefined
let value=undefined;
console.log(typeof value);

// null
let nullvalue=null;
console.log(typeof nullvalue);

// BigInt
let bigvalue=BigInt(4564984546);
console.log(bigvalue);

// Symbol
let symvalue=Symbol("%")
console.log(symvalue)

// non-primitive
// Object

let obj={
    name:"xyz",
    age:60,
    isPaased:true,
    
    childObj:{
        childname:"basu",

        nextChildObj:{
            nextname:"ashu"
        }
    }
}
console.log(obj.childObj.childname)
console.log(obj.childObj.nextChildObj.nextname)

// Array
let arr=[1,2,4,"hello",false,{name:"xy"},[5,6]];
console.log(arr[5].name);