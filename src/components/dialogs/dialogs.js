import React from 'react'
import { onMessageChangeAC, sendMessageAC } from '../../Data/dialogReduser'
import './dialogs.css'
import DialogsItem from './dialogsItem/DialogsItem'
import Message from './messages/Message'


let ref = React.createRef()


const Dialogs = (props) => {

  let sendMessage = () => {
    props.sendMessage()
    
  }

let onMessageChange = () => {
  props.onMessageChange(ref.current.value)
}

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
