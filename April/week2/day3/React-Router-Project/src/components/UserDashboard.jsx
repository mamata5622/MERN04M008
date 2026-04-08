import React from 'react'
import { Outlet } from 'react-router'

function UserDashboard() {
  return (
    <div>
        Dashboard
        <Outlet/>
    </div>
  )
}

export default UserDashboard