import {combineReducers} from 'redux'
import snackbarReducer from './snackbarReducer'
import authReducer from './authReducer'


export default combineReducers({
    snackbar:snackbarReducer,
    auth:authReducer
});
