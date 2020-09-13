import React from 'react'
import Post from './post/Post'

function Posts(){
  return(
      <div className='posts'>
      <h2>My posts</h2>
        <input placeholder='enter the post' />
        <button>Add post</button>
        <Post message='Hi, world' />
        <Post message='Im Elon Mask, really' />
        <Post message='Give me some bitcoins' />
        


      </div>
  )
}
export default Posts
