import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {addPost} from './Data/state'
import {sendMessage} from './Data/state'


export let rerenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} sendMessage={sendMessage} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
serviceWorker.unregister();
