import React from 'react'
import './dialogs.css'

const Dialogs = (props) => {
  return(
    <div className='dialogs'>
      <div className='dialog'>
        <p>Иван Иванов</p>
        <p>Илон Маск</p>
        <p>Билл Гейтс</p>
      </div>
      <div className='message'>
        <p>Привет</p>
        <p>Го на марс</p>
        <p>Где мой чип?</p>
        <div className='code'>
          <input type='text' name='message' placeholder='Enter your message' />
          <br /><button>Send</button>
        </div>
      </div>


    </div>
  )
}
export default Dialogs
