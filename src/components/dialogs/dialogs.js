import React from 'react'
import './dialogs.css'
import DialogsItem from './dialogsItem/DialogsItem'
import Message from './messages/Message'

const Dialogs = (props) => {
  return(
    <div className='dialogs'>
      <div className='dialog'>
      {props.dialogsPage.dialogsData.map((e)=><DialogsItem name={e.name} id={e.id} />)}
    </div>
    <div className='messages'>
      {props.dialogsPage.messagesData.map((e)=><Message message={e.message} id={e.id} />)}
        <div className='code'>
          <input type='text' name='message' placeholder='Enter your message' />
          <br /><button>Send</button>
        </div>
    </div>


    </div>
  )
}
export default Dialogs
