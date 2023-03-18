import React,{ useReducer, useContext } from "react"
import reducer from "./reducer"

import {
    TOGGLE_SIDEBAR,
    TOGGLE_MEMBER,
} from './actions'

const initialState = {
    isLoading: false,
    sidebarState: false,
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