import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './Data/state.js'
import {addPost, onMessageChange, onPostChange, sendMessage, subscribe} from './Data/state'




export let rerenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} onMessageChange={onMessageChange} onPostChange={onPostChange} addPost={addPost} sendMessage={sendMessage} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderTree(state)

subscribe(rerenderTree)
