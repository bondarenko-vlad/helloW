import React from 'react'
import { addPostAC, onPostChangeAC } from '../../../Data/profileReduser'
import Posts from './Posts'


function PostsContainer(props) {
  let state = props.store.getState().profilePage
  let dispatch = props.store.dispatch
  let addPost = () => {
    dispatch(addPostAC())
  }
  let onPostChange = (text) => {
    dispatch(onPostChangeAC(text))
  }
  return (
    <Posts
    postsData={state.postsData}
    newPostText={state.newPostText}
    addPost={addPost}
    onPostChange={onPostChange} />
  )
}
export default PostsContainer
