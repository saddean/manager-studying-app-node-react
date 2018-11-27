import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from '../actions/types'

const snackBarState = {
    status: false,
    message: '',
    variant: ''
}
const snackbarReducer = (state = snackBarState, action) => {
    switch (action.type) {
        case OPEN_SNACKBAR:
            return { ...state, status: true, message: action.payload.message, variant: action.payload.variant}
        case CLOSE_SNACKBAR:
            return { ...state, status: false, message: state.message, variant: state.variant }
        default:
            return state
    }
}

export default snackbarReducer;