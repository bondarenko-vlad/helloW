import React from 'react'
import './profile.css'
import Posts from './posts/Posts'
import ProfileInfo from './profileInfo/ProfileInfo'
let props = {
  message: 'Hi world'
}

function Profile(props){
  return(
    <div className='profile'>
      <ProfileInfo />
      <Posts message={props.message} />
    </div>
  )
}
export default Profile
