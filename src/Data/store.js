import { combineReducers, createStore } from 'redux'
import profileReduser from './profileReduser'
import dialogReduser from './dialogReduser'
import sidebarReduser from './sidebarReduser'

let reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogReduser,
    sidebar: sidebarReduser
})

let store = createStore(reducers)
export default store
