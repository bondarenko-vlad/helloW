import React from 'react'
import './profile.css'
import Posts from './posts/Posts'
import ProfileInfo from './profileInfo/ProfileInfo'



function Profile(props){
  return(
    <div className='profile'>
      <ProfileInfo />
      <Posts postsData={props.profilePage.postsData} />

    </div>
  )
}
export default Profile
