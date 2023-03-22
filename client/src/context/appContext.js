import React,{ useReducer, useContext } from "react"
import reducer from "./reducer"

import {
    TOGGLE_SIDEBAR,
    PASSWORD_UNMATCH,
    CLEAR_ALERT,
    DISPLAY_ALERT,
    REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    LOGIN_USER_BEGIN,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    LOGOUT_USER,
    PASSWORD_LENGTH,
} from './actions'

const user = localStorage.getItem('user')

const initialState = {
    isLoading: false,
    sidebarState: false,
    showAlert: false,
    alertType:'',
    alertText:'',
    user: user ? JSON.parse(user): null,
}

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    //ToggleSidebar
    const toggleSidebar = (currState) =>{
        // console.log(currState);
        try{
            dispatch({type:TOGGLE_SIDEBAR, payload:{currState}})
        }
        catch(error){
            alert("Some Error Occurred");
        }
    }

    //Clear Alert
    const clearAlert = () => {
        setTimeout(()=>{
            dispatch({type:CLEAR_ALERT})
        },2000)
    }

    //Passwords Do Not Match (Register)
    const passwordUnmatch = () =>{
        dispatch({type: PASSWORD_UNMATCH})
        clearAlert()
    }

    //Password Too Short
    const passwordLength = () => {
        dispatch({type: PASSWORD_LENGTH})
        clearAlert()
    }

    //Display Alert
    const displayAlert = () => {
        dispatch({type:DISPLAY_ALERT})
        clearAlert()
    }

    //Add User To Local Storage
    const addUserToLocalStorage = ({user}) => {
        localStorage.setItem('user', JSON.stringify(user))
    }

    //Remove User From Local Storage
    const removeUserFromLocalStorage = () => {
        localStorage.removeItem('user')
    }
    
    //Login User
    const loginUser = (currUser) => {
        dispatch({type: LOGIN_USER_BEGIN})
        try{
            console.log(currUser)
            const { email, password } = currUser
            const user = {email,password}
            dispatch({type:LOGIN_USER_SUCCESS, payload:{user}})
            addUserToLocalStorage({user})
        }
        catch(error){
            dispatch({type:LOGIN_USER_ERROR, payload:{msg:error.response.data.msg}})
        }
    }

    //Register User
    const registerUser = (currUser) => {
        dispatch({type:REGISTER_USER_BEGIN})
        try {
            const { name,email,password } = currUser
            const user = {name,email,password}
            dispatch({type:REGISTER_USER_SUCCESS, payload:{user}})
            addUserToLocalStorage({user})
        } catch (error) {
            dispatch({type:REGISTER_USER_ERROR, payload:{msg: error.response.data.msg}})
        }
        clearAlert()
    }

    //Logout User
    const logoutUser = () => {
        dispatch({type: LOGOUT_USER})
        removeUserFromLocalStorage()
    }

    return <AppContext.Provider
            value={
                {
                ...state,
                toggleSidebar,
                passwordUnmatch,
                loginUser,
                registerUser,
                displayAlert,
                logoutUser,
                passwordLength,
                }
            }>
            {children}
    </AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext)
}

export {AppProvider, initialState, useAppContext}