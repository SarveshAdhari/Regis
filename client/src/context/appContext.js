import React,{ useReducer, useContext } from "react"
import reducer from "./reducer"

import {
    TOGGLE_SIDEBAR,
    PASSWORD_UNMATCH,
    CLEAR_ALERT,
} from './actions'

const initialState = {
    isLoading: false,
    sidebarState: false,
    showAlert: false,
    alertType:'',
    alertText:'',
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
    
    //Login User
    const loginUser = (currUser) => {
        console.log('User logged in')
        console.log(currUser)
    }

    //Register User
    const registerUser = (currUser) => {
        console.log('Registered User')
        console.log(currUser)
    }

    return <AppContext.Provider
            value={
                {
                ...state,
                toggleSidebar,
                passwordUnmatch,
                loginUser,
                registerUser,
                }
            }>
            {children}
    </AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext)
}

export {AppProvider, initialState, useAppContext}