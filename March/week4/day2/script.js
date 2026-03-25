console.log("good morning")

// function getData(v,next){
//     setTimeout(()=>{
//         console.log("value:",v)
//         next()
//     },1000)
// }
// getData(1,()=>getData(2,()=>getData(3,()=>getData(4))))

function getData(v){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("value:",v)
            res()
        },1000)
    })
}
// promise chains
getData(1).then(()=>{
    getData(2).then(()=>{
        getData(3).then(()=>{
            getData(4)
        })
    })
}).catch((result)=>{
    console.log("error",result)
})

// fetch API

async function fetchdata(){
    let res=await fetch("https://jsonplaceholder.typicode.com/posts");
    let data=await res.json()
    console.log(data)
}