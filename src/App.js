import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Profile from './components/profile/Profile'
import Dialogs from './components/dialogs/dialogs'
import {BrowserRouter, Route} from 'react-router-dom'




function App(){
  return(
    <div className='wrapper'>
    <BrowserRouter>
    <Header />
    <Navbar />
    <div className='wrapper-content'>
      <Route path='/profile' component={Profile} />
      <Route path='/dialogs' component={Dialogs } />
    </div>
    </BrowserRouter>
    </div>
  )
}
export default App
