
let state = {
  profilePage:{
    postsData: [
      {text:'Hi, world', id:1, likes:0},
      {text:'Im Elon Mask, really', id:2, likes:3},
      {text:'Give me some bitcoins', id:3, likes: 10},
    ],
    newPostText:'hello'
  },
  dialogsPage:{
    dialogsData: [
      {name:'Иван Иванов', id:1},
      {name:'Илон Маск', id:2},
      {name:'Билл Гейтс', id:3}
    ],
    messagesData: [
      {message:'привет', id:1},
      {message:'гоy на Марс', id:2},
      {message:'Где мой чип?', id:3}
    ],
    newMessageText: 'hello'
  },

  sidebar:{
    friends: [
      {name: 'Bill', ava: require('../img/bill.jpg')},
      {name: 'Vanya', ava: require('../img/ivan.jpg')},
      {name: 'Arny', ava: require('../img/arny.jpg')}
    ]
  }
}
let rerenderTree = () => {
  console.log('It is fake function');
}

export let addPost = (postText) => {
  let newPost= {
    text: postText,
    id: 4,
    likes:0
  }
  state.profilePage.postsData.unshift(newPost)
  state.profilePage.newPostText = ''
  rerenderTree()
}
export let onPostChange = (text) => {
  state.profilePage.newPostText = text
  rerenderTree()
}


export let sendMessage = (message) => {
  let newMessage= {
    message: message,
    id: 4
  }
  state.dialogsPage.messagesData.push(newMessage)
  rerenderTree(state)
}
export let onMessageChange = (text) => {
  state.dialogsPage.newMessageText = text
  rerenderTree(state)
}

export let subscribe = (observer) => {
  rerenderTree = observer
}
export default state
window.state=state
