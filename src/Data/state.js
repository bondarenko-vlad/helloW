let store = {
  _state :{
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
  },
  getState(){
    return this._state
  },
  rerenderTree(){
    console.log('It is fake function');
  },
  addPost(postText){
    let newPost= {
      text: postText,
      id: 4,
      likes:0
    }
    this._state.profilePage.postsData.unshift(newPost)
    this._state.profilePage.newPostText = ''
    this.rerenderTree(this._state) //
  },
  onPostChange(text){
    this._state.profilePage.newPostText = text
    this.rerenderTree(this._state) //
  },
  sendMessage(message){
    let newMessage= {
      message: message,
      id: 4
    }
    this._state.dialogsPage.messagesData.push(newMessage)
    this.rerenderTree(this._state) //
  },
  onMessageChange(text){
    this._state.dialogsPage.newMessageText = text
    this.rerenderTree(this._state) //
  },
  subscribe(observer){
    this.rerenderTree = observer
  }
}

export default store
