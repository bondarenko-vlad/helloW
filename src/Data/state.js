import dialogReduser from './dialogReduser'
import profileReduser from './profileReduser'
import sidebarReduser from './sidebarReduser';


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
    this._state.profilePage = profileReduser(this._state.profilePage, action)
    this.rerenderTree(this._state)

    this._state.dialogsPage = dialogReduser(this._state.dialogsPage, action)
    this.rerenderTree(this._state)

    this._state.sidebar = sidebarReduser(this._state.sidebar, action)
  },
  subscribe(observer) {
    this.rerenderTree = observer
  }
}



window.store = store
export default store
