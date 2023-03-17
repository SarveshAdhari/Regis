import React,{ useReducer, useContext } from "react"
import reducer from "./reducer"

import {
    TOGGLE_SIDEBAR,
    TOGGLE_MEMBER,
} from './actions'

const initialState = {
    isLoading: false,
    sidebarState: false,
    isMember: true,
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

    const toggleMember = (togg) => {
        try{
            dispatch({type: TOGGLE_MEMBER, payload:{togg}})
        }
        catch(error){
            alert("Some Error Occurred")
        }
    }

    return <AppContext.Provider
            value={
                {
                ...state,
                toggleSidebar,
                toggleMember,
                }
            }>
            {children}
    </AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext)
}

export {AppProvider, initialState, useAppContext}