import React from 'react'


function Post(props){
  return(

        <div class='post'>
          <img src={require('../../../../img/elon.jpg')} alt='profile mini photo' />
          <span>Elon Mask</span>
          <p>{props.message}</p>
          <span className='likes'><span>{props.likes}</span> likes</span>
        </div>
  )
}
export default Post
