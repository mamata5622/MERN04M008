console.log("10th of march");

// higher order function
// this is accepting a function as a parameter
function hof(func){
    func()
}

hof(function(){console.log("this is the argument function")})

// it is return a function

function hof1(){
    let childfun=function(){
        console.log("this is the inside function")
    }
    return childfun;
}

hof1()()

// IIF
// (function(){
//     console.log("this is the IIF");
// })()

// callback function
// it is a function used as an argument at the time of calling 

// Arrow function 
let arrowFun=()=>{
    console.log("this is the arrow function")
} 

arrowFun()

let arr=["item8","item4","item5","item1"]
let sorting=()=>{
    return arr.toSorted()
}
console.log(sorting())

let arr1=[1,7,5,4,8,6,9]
// for(let v of arr1){
//     console.log(v)
// }

arr1.forEach((x,i)=>{
    console.log(x,i)
})

let arr2=[2,3,4]

arr2.forEach((a,i)=>{
    console.log("sqr of a number:",a*a)
})

// optional operator 
let obj={
    name:"hello"
}
console.log(obj?.name);

console.log(null??"hiee");
