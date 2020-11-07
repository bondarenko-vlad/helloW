import React from 'react'
import './dialogs.css'
import DialogsItem from './dialogsItem/DialogsItem'
import Message from './messages/Message'
import {sendMessageAC, onMessageChangeAC} from '../../Data/state'

let ref = React.createRef()


const Dialogs = (props) => {
  let sendMessage = () => {
    let text = ref.current.value
    props.dispatch(sendMessageAC())
  }
let onMessageChange = () => {
  props.dispatch(onMessageChangeAC(ref.current.value))
}
console.log(props);
  return(
    <div className='dialogs'>
      <div className='dialog'>
      {props.dialogsPage.dialogsData.map((e)=><DialogsItem name={e.name} id={e.id} />)}
    </div>
    <div className='messages'>
      {props.dialogsPage.messagesData.map((e)=><Message message={e.message} id={e.id} />)}
        <div className='code'>
          <input onChange={onMessageChange} value={props.newMessageText} ref={ref} type='text' name='message' placeholder='Enter your message' />
          <br />
          <button onClick={sendMessage}>Send</button>
        </div>
    </div>


    </div>
  )
}
export default Dialogs
