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
    if(action.type===DISPLAY_ALERT){
        return{
            ...state,
            showAlert: true,
            alertType: 'warning',
            alertText: 'Please Enter All Values!',
        }
    }
    if(action.type===REGISTER_USER_BEGIN){
        return{
            ...state,
            showAlert: false,
            alertText:'',
        }
    }
    if(action.type===REGISTER_USER_SUCCESS){
        return{
            ...state,
            user: action.payload.user,
            showAlert: true,
            alertType: 'success',
            alertText: 'Successfully Registered! Redirecting...',
        }
    }
    if(action.type===REGISTER_USER_ERROR){
        return{
            ...state,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
        }
    }
    if(action.type===LOGIN_USER_BEGIN){
        return{
            ...state,
            showAlert: false,
            alertText: '',
        }
    }
    if(action.type=== LOGIN_USER_SUCCESS){
        return{
            ...state,
            user: action.payload.user,
            showAlert: true,
            alertType: 'success',
            alertText: 'Logged In Successfully! Redirecting...',
        }
    }
    if(action.type === LOGIN_USER_ERROR){
        return{
            ...state,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
        }
    }
    throw new Error(`No such action: ${action.type}`)
}

export default reducer