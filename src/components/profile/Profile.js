import React from 'react'
import './profile.css'
import ProfileInfo from './profileInfo/ProfileInfo'
import PostsContainer from './posts/PostsContainer'

function Profile(props){
  return(
    <div className='profile'>
      <ProfileInfo />
      <PostsContainer
        // postsData={props.profilePage.postsData}
        // dispatch={props.dispatch}
        // newPostText={props.newPostText}
        store={props.store} />
    </div>
  )
}
export default Profile
