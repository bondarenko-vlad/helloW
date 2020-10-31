import React from 'react'
import './navbar.css'
import {NavLink} from 'react-router-dom'

function Navbar(props){
  console.log(props);
  return(
    <div className='navbar'>
      <NavLink to='/profile'>Profile</NavLink>
      <NavLink to='/dialogs'>Messages</NavLink>
      <NavLink to='/users'>Users</NavLink>
      <div className='friends'>
          <NavLink to='/friends'>Friends</NavLink>
          {props.friends.map((e) => (
            <div className='friend'>
              <img src={e.ava} />
              <p>{e.name}</p>
            </div>
          ))}


      </div>
    </div>
  )
}
export default Navbar
