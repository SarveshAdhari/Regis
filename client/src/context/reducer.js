import {
    TOGGLE_SIDEBAR,
} from './actions'

const reducer = (state, action) =>{
    if(action.type === TOGGLE_SIDEBAR){
        return{
            ...state,
            sidebarState: action.payload.currState,
        }
    }
    throw new Error(`No such action: ${action.type}`)
}

export default reducer