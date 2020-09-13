import React from 'react'


function Post(props){
  return(

        <div class='post'>
          <img src='https://www.finversia.ru/site/public/files/18/17284-428.jpg' alt='profile mini photo' />
          <span>Elon Mask</span>
          <p>{props.message}</p>
        </div>
  )
}
export default Post
