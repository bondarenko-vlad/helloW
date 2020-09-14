import React from 'react'
import './dialogs.css'
import DialogsItem from './dialogsItem/DialogsItem'
import Message from './messages/Message'


const Dialogs = (props) => {
  return(
    <div className='dialogs'>
      <div className='dialog'>
        <DialogsItem name={'Иван Иванов'} id={'1'} />
        <DialogsItem name={'Илон Маск'} id={'2'} />
        <DialogsItem name={'Билл Гейтс'} id={'3'} />
    </div>
    <div className='messages'>
        <Message message={'Привет'} />
        <Message message={'Го на Марс'} />
        <Message message={'Где мой чип?'} />
        <div className='code'>
          <input type='text' name='message' placeholder='Enter your message' />
          <br /><button>Send</button>
        </div>
    </div>


    </div>
  )
}
export default Dialogs
