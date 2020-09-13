import React from 'react'
import './profile.css'
import Posts from './posts/Posts'
let props = {
  message: 'Hi world'
}

function Profile(props){
  return(
    <div className='profile'>
      <div className='me'>
        <img src='https://www.finversia.ru/site/public/files/18/17284-428.jpg' alt='My photo' />
        <p>Elon Mask</p>
      </div>
      <Posts message={props.message} />
    </div>
  )
}
export default Profile
