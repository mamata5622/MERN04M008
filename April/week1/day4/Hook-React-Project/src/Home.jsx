import React, { useState } from 'react'

function Home() {


// useState()
//  it is used to maintain the state

// suntax of useState
// const[variable,function(this is the fun used to update the variable)]=useState(intialization value)

const [a,setA]=useState(0);

//   let a=5;

  const handleClick=()=>{
    console.log("hello Click")

    setA(a+1)
//     a=a+1
//     console.log(" a value ",a)
  }

  return (
    <div>
        Home<br/>
        value:{a}<br/>
        <button onClick={handleClick}>
            Click
        </button>
    </div>
  )
}

export default Home