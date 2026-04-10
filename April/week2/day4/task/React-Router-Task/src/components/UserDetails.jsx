import React from 'react'
import { useParams } from 'react-router'

function UserDetails() {

  const{id}=useParams();
  return (
    <div>
      <h1>User Details</h1>
      <br />
      <strong>Name :</strong>
    </div>
  )
}

export default UserDetails 