// 1. What is a Promise in JavaScript? Explain its three states.
// 2. Create a Promise that resolves after 2 seconds with the message `"Hello World"`.

let promise=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Hello World")
    },2000)
})
console.log(promise)

// 3. Write a Promise that rejects with an error `"Something went wrong"`.

let rejpromise=new Promise((res,rej)=>{
    setTimeout(()=>{
        rej("something went wrong")
    },1000)
})
console.log(rejpromise)

// 4. What is the difference between:
//     - `resolve()`
//     - `reject()`
// 5. What will be the output?
// let constp=newPromise((resolve,reject) => {
// resolve("Success");
// });

// p.then(res =>console.log(res));
// 6. What is the Fetch API?
// 7. Write a basic GET request using `fetch()` to get data from:

async function datafetch(){
    let res=await fetch("https://jsonplaceholder.typicode.com/posts")
    let data=await res.json()
    console.log(data)
}
datafetch()
// 8. What does `response.json()` do?
// 9. Create a function `getUsers()`:
// - fetch users
// - print only name

