import React from 'react'
import './users.css'
let data = require('../../data')
let Users = (props) => {
    return (
        <div className='users'>
            {
                data.users.map((e) => <div className='user'>
                    <img src={require('../../img/defaultAva.jpg')} />
                    <span className='userName'>{e.name}</span><br />
                    <span className='status'>{e.status}</span>
                    <button>Follow/UnFollow</button>
                </div>)
            }
        </div>
    )
}
export default Users