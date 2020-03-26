import { CHECK_AUTH,  SHOW_ROUTE, GET_USER} from './actions'
import { combineReducers } from 'redux';

const authReducer = ( state=false, action) => {
    switch(action.type) {
        case CHECK_AUTH: 
            return action.isAuth
        
        default: 
            return state
    }
}

const userReducer = ( state='', action) => {
    switch(action.type) {
        case GET_USER: 
            return action.user
        
        default: 
            return state
    }
}

const routeReducer = ( state='', action) => {
    switch(action.type) {
        case SHOW_ROUTE: 
            return action.routeName
        
        default: 
            return state
    }
}

export const blogReducers = combineReducers({
    userReducer,
    routeReducer,
    authReducer,
})