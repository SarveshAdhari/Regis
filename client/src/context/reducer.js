import {
    TOGGLE_MEMBER,
    TOGGLE_SIDEBAR,
} from './actions'

const reducer = (state, action) =>{
    if(action.type === TOGGLE_SIDEBAR){
        return{
            ...state,
            sidebarState: action.payload.currState,
        }
    }
    if(action.type === TOGGLE_MEMBER){
        return{
            ...state,
            isMember: action.payload.togg,
        }
    }
    throw new Error(`No such action: ${action.type}`)
}

export default reducer