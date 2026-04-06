import React, { useContext } from 'react'
import { empContext, stdContext } from './App'

function Child() {

    const std=useContext(stdContext)
    const emp=useContext(empContext)
    console.log(emp)
    console.log(std)
  return (
    <div>Child</div>
  )
}

export default Child