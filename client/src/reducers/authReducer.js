import { AUTH_USER, UNAUTH_USER, ON_LOADING_LOGIN, OFF_LOADING_LOGIN, CHANGE_STATUS_LOGIN } from '../actions/types'

const authState = {
    authenticated: false,
    isLoading: false,
    isLogin: true
}
const authReducer = (state = authState, action) => {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, authenticated: true }
        case UNAUTH_USER:
            return { ...state, authenticated: false }
        case ON_LOADING_LOGIN:
            return { ...state, isLoading: true }
        case OFF_LOADING_LOGIN:
            return { ...state, isLoading: false }
        case CHANGE_STATUS_LOGIN:
            return { ...state, isLogin: !state.isLogin }
        default:
            return state
    }
}

export default authReducer;