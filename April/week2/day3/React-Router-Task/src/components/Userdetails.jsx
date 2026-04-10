import React from 'react'
import { useParams } from 'react-router'

function Userdetails() {
    const{id}=useParams();
  return (
    <div>
        Userdetails
        <br/>
        User Id : {id}
    </div>
  )
}

export default Userdetails