import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Profile from './components/profile/Profile'
import { BrowserRouter, Route } from 'react-router-dom'
import DialogsContainer from './components/dialogs/dialogsContainer'
import Users from './components/users/users'




function App(props) {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <Navbar friends={props.state.sidebar.friends} />
        <div className='wrapper-content'>
          <Route exact path='/' render={() => <Profile
            store={props.store}
          />} />
          <Route path='/profile' render={() => <Profile
            store={props.store}
          />} />
          <Route path='/dialogs' render={() => <DialogsContainer
            store={props.store}
          />} />
          <Route path='/users' render={() => <Users
          />} />
        </div>
      </BrowserRouter>
    </div>
  )
}
export default App
