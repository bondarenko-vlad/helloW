let ADD_POST = 'ADD-POST'
let POST_CHANGE = 'POST-CHANGE'

let profileReduser = (state,action) => {
  if (action.type == ADD_POST) {
    let newPost = {
      text: state.newPostText,
      id: 4,
      likes: 0
    }
    state.postsData.unshift(newPost)
    state.newPostText = ''
  } else if (action.type == POST_CHANGE) {
    state.newPostText = action.text
  }
  console.log(state);
  return state
}
export default profileReduser


export let addPostAC = () => {
  return {
    type: ADD_POST,
    id: 1
  }
}
export let onPostChangeAC = (text) => {
  return {
    type: POST_CHANGE,
    text: text
  }
}