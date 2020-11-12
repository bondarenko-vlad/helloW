let SEND_MESSAGE = 'SEND-MESSAGE'
let MESSAGE_CHANGE = 'MESSAGE-CHANGE'

let dialogReduser = (state, action) => {
    if (action.type == SEND_MESSAGE) {
        let newMessage = {
          message: state.newMessageText,
          id: 4
        }
        state.messagesData.push(newMessage)
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