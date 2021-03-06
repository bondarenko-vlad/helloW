import React from 'react'
import Post from './post/Post'
import {addPostAC, onPostChangeAC} from '../../../Data/profileReduser'

let postText = React.createRef()



function Posts(props){
  let addPost = () => {
    // props.dispatch(addPostAC())
    props.addPost()
    postText.current.value=''
  }
  let onPostChange = () => {
    // props.dispatch(onPostChangeAC(postText.current.value))
    props.onPostChange(postText.current.value)
  }
  return(
      <div className='posts'>
      <h2>My posts</h2>
        <input onChange={onPostChange} value={props.newPostText} ref={postText} placeholder='enter the post' />
        <button onClick={addPost}>Add post</button>
      {  props.postsData.map( (e) => <Post message={e.text} id={e.id} likes={e.likes} />)}
      </div>
  )
}
export default Posts
