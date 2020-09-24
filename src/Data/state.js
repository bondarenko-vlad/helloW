let state = {
  profilePage:{
    postsData: [
      {text:'Hi, world', id:1, likes:0},
      {text:'Im Elon Mask, really', id:2, likes:3},
      {text:'Give me some bitcoins', id:3, likes: 10},
    ]
  },
  dialogsPage:{
    dialogsData: [
      {name:'Иван Иванов', id:1},
      {name:'Илон Маск', id:2},
      {name:'Билл Гейтс', id:3}
    ],
    messagesData: [
      {message:'привет', id:1},
      {message:'го на Марс', id:2},
      {message:'Где мой чип?', id:3}
    ]
  },
  sidebar:{
    friends: [
      {name: 'Bill', ava: 'https://i.pinimg.com/originals/bc/8b/2b/bc8b2b3340e52f25699d3c7091eef912.png'},
      {name: 'Vanya', ava: 'https://uznayvse.ru/images/celebs/2018/11/ivan-the-terrible_big.jpg'},
      {name: 'Arny', ava: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg'}
    ]
  }

}
export default state
