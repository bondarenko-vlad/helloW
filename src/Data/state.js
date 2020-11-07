let ADD_POST = 'ADD-POST'
let POST_CHANGE = 'POST-CHANGE'
let SEND_MESSAGE = 'SEND-MESSAGE'
let MESSAGE_CHANGE = 'MESSAGE-CHANGE'


let store = {
  _state: {
    profilePage: {
      postsData: [
        { text: 'Hi, world', id: 1, likes: 0 },
        { text: 'Im Elon Mask, really', id: 2, likes: 3 },
        { text: 'Give me some bitcoins', id: 3, likes: 10 },
      ],
      newPostText: 'hello'
    },
    dialogsPage: {
      dialogsData: [
        { name: 'Иван Иванов', id: 1 },
        { name: 'Илон Маск', id: 2 },
        { name: 'Билл Гейтс', id: 3 }
      ],
      messagesData: [
        { message: 'привет', id: 1 },
        { message: 'гоy на Марс', id: 2 },
        { message: 'Где мой чип?', id: 3 }
      ],
      newMessageText: 'hello'
    },

    sidebar: {
      friends: [
        { name: 'Bill', ava: require('../img/bill.jpg') },
        { name: 'Vanya', ava: require('../img/ivan.jpg') },
        { name: 'Arny', ava: require('../img/arny.jpg') }
      ]
    }
  },
  getState() {
    return this._state
  },
  rerenderTree() {
    console.log('It is fake function');
  },
  dispatch(action) {
    if (action.type == ADD_POST) {
      let newPost = {
        text: this._state.profilePage.newPostText,
        id: 4,
        likes: 0
      }
      this._state.profilePage.postsData.unshift(newPost)
      this._state.profilePage.newPostText = ''
      this.rerenderTree(this._state)
    } else if (action.type == POST_CHANGE) {
      this._state.profilePage.newPostText = action.text
      this.rerenderTree(this._state)
    } else if (action.type == SEND_MESSAGE) {
      let newMessage = {
        message: this._state.dialogsPage.newMessageText,
        id: 4
      }
      this._state.dialogsPage.messagesData.push(newMessage)
      this.rerenderTree(this._state)
    } else if (action.type == MESSAGE_CHANGE) {
      this._state.dialogsPage.newMessageText = action.text
      this.rerenderTree(this._state)
    }
  },
  subscribe(observer) {
    this.rerenderTree = observer
  }
}

export let addPostAC = () => {
  return {
    type:ADD_POST,
    id: 1
  }
}
export let onPostChangeAC = (text) => {
  return {
    type:POST_CHANGE, 
    text:text
  }
}
export let sendMessageAC = () => {
  return {
    type:'SEND-MESSAGE',
    id: 1
  }
}
export let onMessageChangeAC = (text) => {
  return {
    type:'MESSAGE-CHANGE', 
    text:text
  }
}

export default store
