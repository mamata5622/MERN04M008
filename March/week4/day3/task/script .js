async function getdata(){
    try {
       let res=await fetch("https://jsonplaceholder.typicode.com/users/1");
       let data=await res.json() 
       console.log(data)
    } catch (error) {
        console.log(error)
    }
}
getdata()

async function updatedata(){
    try {
       let res=await fetch("https://jsonplaceholder.typicode.com/users/1",{
        method:"PATCH",
        body:JSON.stringify({
        email:"noone@gmail.com"    
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
       });
       let data=await res.json() 
       console.log(data)
    } catch (error) {
        
    }
}
updatedata()

async function deletedata(){
    try {
        let res=await fetch("https://jsonplaceholder.typicode.com/users/1",{ 
        method:"DELETE",
    });

    let data=await res.json();
    console.log(data)
    } catch (error) {
       console.log(error) 
    }
}
deletedata()