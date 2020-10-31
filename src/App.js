import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Profile from './components/profile/Profile'
import Dialogs from './components/dialogs/dialogs'
import {BrowserRouter, Route} from 'react-router-dom'




function App(props){
  
  return(
    <div className='wrapper'>
    <BrowserRouter>
    <Header />
    <Navbar friends={props.state.sidebar.friends} />
    <div className='wrapper-content'>
      <Route exact path='/' render={()=><Profile
          profilePage={props.state.profilePage}
          newPostText={props.state.profilePage.newPostText}
          addPost={props.addPost}
          onPostChange={props.onPostChange}
           />} />
      <Route path='/profile' render={()=><Profile
          profilePage={props.state.profilePage}
          newPostText={props.state.profilePage.newPostText}
          addPost={props.addPost}
          onPostChange={props.onPostChange}
           />} />
         <Route path='/dialogs' render={()=><Dialogs
             onMessageChange={props.onMessageChange}
             dialogsPage={props.state.dialogsPage}
             sendMessage={props.sendMessage}
             newMessageText={props.state.dialogsPage.newMessageText}
               />} />
    </div>
    </BrowserRouter>
    </div>
  )
}
export default App
