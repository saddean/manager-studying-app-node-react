import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from '../actions/types'

export const openSnackbar = (message, variant) => dispatch => {
    return dispatch({
        type: OPEN_SNACKBAR,
        payload: {
            message: message,
            variant: variant
        }
    })
}

export const closeSnackbar = () => dispatch => {
    return dispatch({
        type: CLOSE_SNACKBAR
    })
}
