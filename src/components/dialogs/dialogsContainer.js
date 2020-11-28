import React from 'react'
import { onMessageChangeAC, sendMessageAC } from '../../Data/dialogReduser'
import './dialogs.css'
import Dialogs from './dialogs'




const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage
    let dispatch = props.store.dispatch
    let sendMessage = () => {
        dispatch(sendMessageAC())
    }
    let onMessageChange = (text) => {
        dispatch(onMessageChangeAC(text))
    }
    return (
        <Dialogs sendMessage={sendMessage} 
        onMessageChange={onMessageChange}
        dialogsPage={state}
        newMessageText={state.newMessageText}
        />
    )
}
export default DialogsContainer
