let SEND_MESSAGE = 'SEND-MESSAGE'
let MESSAGE_CHANGE = 'MESSAGE-CHANGE'

let initialState = {
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
}


let dialogReduser = (state = initialState, action) => {
    if (action.type == SEND_MESSAGE) {
        let newMessage = {
          message: state.newMessageText,
          id: 4
        }
        state.messagesData.push(newMessage)
        state.newMessageText = ''
      } else if (action.type == MESSAGE_CHANGE) {
        state.newMessageText = action.text  
      }
    return state
}
export default dialogReduser

export let sendMessageAC = () => {
    return {
      type:SEND_MESSAGE,
      id: 1
    }
  }
  export let onMessageChangeAC = (text) => {
    return {
      type:MESSAGE_CHANGE, 
      text:text
    }
}