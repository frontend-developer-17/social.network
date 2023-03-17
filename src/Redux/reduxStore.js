import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import AuthLoginReduser from "./AuthLoginReduser"
import MessageReduser from "./MessagesReduser"
import ProfileReduser from "./ProfileReduser"
import UserReduser from "./UserReduser"
import  thunkMiddleware from "redux-thunk"
import InitialaisedReduser from "./InitialasedReduser"
//import User2Redeser from "./User2PageReduser"
//import NavBarReduser6 from "./User2PageReduser"
//import aboutMeReduser from "./AuthLoginReduser"
//import ProfileReduser2 from "./ProfileReduser2"

let redusers= combineReducers({
    profilePage:ProfileReduser,
    messagePage:MessageReduser,
    userPage:UserReduser,
     AuthLoginReduser:AuthLoginReduser,
     Initialaised:InitialaisedReduser    
   
   
     
})


let store = legacy_createStore(redusers, applyMiddleware(thunkMiddleware))
window.store = store
export default store



