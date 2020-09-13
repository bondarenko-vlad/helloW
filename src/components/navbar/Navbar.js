import React from 'react'
import './navbar.css'
import {NavLink} from 'react-router-dom'

function Navbar(){
  return(
    <div className='navbar'>
      <NavLink to='/profile'>Profile</NavLink>
      <NavLink to='/dialogs'>Messages</NavLink>
      <NavLink to='/users'>Users</NavLink>
    </div>
  )
}
export default Navbar
