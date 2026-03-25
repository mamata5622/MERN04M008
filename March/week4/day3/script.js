console.log("morning")

async function getdata(){
    try {
       let res=await fetch("https://jsonplaceholder.typicode.com/posts");
       let data=await res.json() 
       let ul=document.createElement("ul")
       data.forEach((obj)=>{
        let li=document.createElement("li")
        li.innerText=obj.title;

        ul.append(li);
       })

       document.body.append(ul)
    } catch (error) {
        console.log(error)
    }
}
getdata()

// post(create data)
async function createdata(){
    try {
        let res=await fetch("https://jsonplaceholder.typicode.com/posts",{ 
        method:"POST",
        body:JSON.stringify({
            title:"hiee",
            body: "this is body"
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    });

    let data=await res.json();
    console.log(data)
    } catch (error) {
       console.log(error) 
    }
}
createdata()

// updating data

async function updatedata(){
    try {
        let res=await fetch("https://jsonplaceholder.typicode.com/posts/1",{ 
        method:"Put",
        body:JSON.stringify({
            title:"hello,everyone",
            body: "this is new body"
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    });

    let data=await res.json();
    console.log(data)
    } catch (error) {
       console.log(error) 
    }
}
updatedata()

// delete data

async function deletedata(){
    try {
        let res=await fetch("https://jsonplaceholder.typicode.com/posts/1",{ 
        method:"DELETE",
    });

    let data=await res.json();
    console.log(data)
    } catch (error) {
       console.log(error) 
    }
}
deletedata()