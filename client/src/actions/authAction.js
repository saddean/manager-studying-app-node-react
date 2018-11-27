import { AUTH_USER, UNAUTH_USER, ON_LOADING_LOGIN, OFF_LOADING_LOGIN, CHANGE_STATUS_LOGIN } from '../actions/types'
import callAPI from '../utils/callAPI'
import history from '../utils/history'
import * as SnackBar from './snackbarAction'

export const signIn = (data) => dispatch => {
    dispatch({ type: ON_LOADING_LOGIN })
    SnackBar.openSnackbar("Đang xử lí ...", "warning")(dispatch);
    callAPI('users/login', 'POST', data)
        .then(result => {
            if (result.status === 200 && result.data.status === true) {
                localStorage.setItem('token', result.headers['x-auth']);
                dispatch({ type: AUTH_USER });
                SnackBar.openSnackbar("Đăng nhập thành công", "success")(dispatch);
                dispatch({ type: OFF_LOADING_LOGIN })
                history.push("/")
            }
        })
        .catch(err => {
            SnackBar.openSnackbar((err.response.data.message) ? err.response.data.message : "Có lỗi xảy ra", "error")(dispatch);
            dispatch({ type: OFF_LOADING_LOGIN })
        })

}

export const signOut = () => dispatch => {
    localStorage.clear();
    return dispatch({ type: UNAUTH_USER })
}

export const changeStatusLogin = () => dispatch => {
    return dispatch({ type: CHANGE_STATUS_LOGIN })
}

export const signUp = (data) => dispatch => {
    dispatch({ type: ON_LOADING_LOGIN })
    SnackBar.openSnackbar("Đang xử lí ...", "warning")(dispatch);
    callAPI('users/register', 'POST', data)
        .then(result => {
            if (result.status === 200) {
                SnackBar.openSnackbar("Đăng ký thành công ,kiểm tra email", "success")(dispatch);
                changeStatusLogin()(dispatch);
                dispatch({ type: OFF_LOADING_LOGIN })
            }
        })
        .catch(err => {
            SnackBar.openSnackbar((err.response.data.message) ? err.response.data.message : "Có lỗi xảy ra", "error")(dispatch);
            dispatch({ type: OFF_LOADING_LOGIN })
        })

}