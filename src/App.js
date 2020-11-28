import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Profile from './components/profile/Profile'
import { BrowserRouter, Route } from 'react-router-dom'
import DialogsContainer from './components/dialogs/dialogsContainer'




function App(props) {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <Navbar friends={props.state.sidebar.friends} />
        <div className='wrapper-content'>
          <Route exact path='/' render={() => <Profile
            // profilePage={props.state.profilePage}
            // newPostText={props.state.profilePage.newPostText}
            // dispatch={props.dispatch}
            store={props.store}
          />} />
          <Route path='/profile' render={() => <Profile
            // profilePage={props.state.profilePage}
            // newPostText={props.state.profilePage.newPostText}
            // dispatch={props.dispatch}
            store={props.store}
          />} />
          <Route path='/dialogs' render={() => <DialogsContainer
            // dialogsPage={props.state.dialogsPage}
            // newMessageText={props.state.dialogsPage.newMessageText}
            // dispatch={props.dispatch}
            store={props.store}
          />} />
        </div>
      </BrowserRouter>
    </div>
  )
}
export default App
