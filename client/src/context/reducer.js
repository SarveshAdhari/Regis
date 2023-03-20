import {
    TOGGLE_SIDEBAR,
    PASSWORD_UNMATCH,
    CLEAR_ALERT,
} from './actions'

const reducer = (state, action) =>{
    if(action.type === TOGGLE_SIDEBAR){
        return{
            ...state,
            sidebarState: action.payload.currState,
        }
    }
    if(action.type===PASSWORD_UNMATCH){
        return{
            ...state,
            showAlert: true,
            alertType:'danger',
            alertText: 'Passwords Do Not Match!',
        }
    }
    if(action.type===CLEAR_ALERT){
        return{
            ...state,
            showAlert: false,
            alertType:'',
            alertText:'',
        }
    }
    throw new Error(`No such action: ${action.type}`)
}

export default reducer