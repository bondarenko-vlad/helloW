import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Data/state.js'

function rerenderTree(state){
  ReactDOM.render(
    <React.StrictMode>
      <App state={state}
        onMessageChange={store.onMessageChange.bind(store)}
        onPostChange={store.onPostChange.bind(store)}
        addPost={store.addPost.bind(store)}
        sendMessage={store.sendMessage.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderTree(store.getState())

store.subscribe(rerenderTree)
