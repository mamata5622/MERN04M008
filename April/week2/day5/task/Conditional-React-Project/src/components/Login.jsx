import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function Login() {
    const navigate=useNavigate()
    const [storeddata,setStoredData]=useState({
        email : "",
        Password :"",
    })
    const[error,setError]=useState('')
    
    function handleChange(e) {
    setStoredData({...FormData,[e.target.name] : e.target.value});
    
  }
  function handleSubmit(e){
    e.preventDefault()
    localStorage.getItem("users",JSON.parse(FormData))
    if(storeddata&&storeddata.email===FormData.email&&storeddata.Password===FormData.Password){
        navigate("/dash")
    }else{
       setError("Invalid email or password") 
    }
  }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input type="email" value={storeddata.email} onChange={handleChange} placeholder='email' className='border rounded-md border-purple-500'/>
            <br />

            <input type="password" value={storeddata.Password} onChange={handleChange} placeholder='Password' className='border rounded-md border-purple-500 mt-3'/>
            <br />
            <button className='rounded-md p-2 bg-purple-500 font-medium text-white mt-2' type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login