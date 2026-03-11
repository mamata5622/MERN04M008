console.log("good morning")

let arr=[1,2,3,4,5,6];
arr.forEach((v,i)=>{
    console.log(v)
})

let updateArr=arr.map((v,i)=>{
    return v+2;
})
//  let updateArr=arr.map(v=>v+2)

console.log(updateArr)

// filter function 
 let filterArr=arr.filter((v,i)=>{ 
    return v%2===0
 })
 console.log(filterArr)

//  reduce function

let add=arr.reduce((sum,curr)=>{
    return sum+curr;
},0)
console.log(add);

// find() function 
let gre=arr.find((v)=>v>5);
console.log(gre);

// some
let isgrethan6=arr.some((v)=>v>6)
console.log(isgrethan6);

// every

let eveele=arr.every((v)=>v>0)
console.log(eveele);
console.log(arr.toSorted((a,b)=>b-a))

let numArr=[1,2,3,[8,7,5,[5,5,5,5,1[6,5,6,5]]]];
console.log(numArr.flat(Infinity))

// que 
let users =[
    {name:"ram",age:24},
    {name:"jack",age:26},
    {name:"shyam",age:30}
]
let names=users.map(obj=>obj?.name);
console.log(names)

let isagegrethan23=users.filter(obj=>obj?.age>25)
console.log(isagegrethan23)

let product=[
    {name:"pen",price:10},
    {name:"book",price:50},
    {name:"bag",price:150}
]
let addprice=product.reduce((sum1,curr1)=>{
    return sum1+curr1.price
},0)
console.log(addprice)

let nArr = [1, 2, 3, 2, 3, 4, 5, 6, 7, 6];

let distinctArr = nArr.filter((v, i) => nArr.indexOf(v) === i);
console.log(distinctArr)
