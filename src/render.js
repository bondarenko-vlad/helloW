import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {addPost} from './Data/state'
import {onMessageChange} from './Data/state'
import {onPostChange} from './Data/state'
import {sendMessage} from './Data/state'


export let rerenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} onMessageChange={onMessageChange} onPostChange={onPostChange} addPost={addPost} sendMessage={sendMessage} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
serviceWorker.unregister();
