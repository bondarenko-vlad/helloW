import React from 'react'
import './dialogs.css'
import DialogsItem from './dialogsItem/DialogsItem'
import Message from './messages/Message'

let dialogNames = [{name:'Иван Иванов', id:1}, {name:'Илон Маск', id:2}, {name:'Билл Гейтс', id:3}]
let messageItems = [{message:'привет', id:1}, {message:'го на Марс', id:2}, {message:'Где мой чип?', id:3}]

const Dialogs = (props) => {
  return(
    <div className='dialogs'>
      <div className='dialog'>
      {dialogNames.map((e)=><DialogsItem name={e.name} id={e.id} />)}
    </div>
    <div className='messages'>
      {messageItems.map((e)=><Message message={e.message} id={e.id} />)}
        <div className='code'>
          <input type='text' name='message' placeholder='Enter your message' />
          <br /><button>Send</button>
        </div>
    </div>


    </div>
  )
}
export default Dialogs
