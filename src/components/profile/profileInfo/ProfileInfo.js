import React from 'react'


function ProfileInfo(props){
  return(
      <div className='me'>
        <img src={require('../../../img/elon.jpg')} alt='My photo' />
        <p>Elon Mask</p>
      </div>
  )
}
export default ProfileInfo
