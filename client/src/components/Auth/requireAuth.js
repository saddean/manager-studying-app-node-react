import React, { Component } from 'react';
import { connect } from 'react-redux'
import history from '../../utils/history'
import jwt from 'jsonwebtoken';
import { AUTH_USER } from '../../actions/types'
import callAPI from '../../utils/callAPI';

export default function (ComposedComponent) {
    class Authentication extends Component {

        componentWillMount() {
            const token = localStorage.getItem('token');
            if (!token) {
                history.push('/login')
            } else {
                let decode
                try {
                    decode = jwt.decode(token);
                    let current_time = Date.now() / 1000;
                    if (current_time < decode.exp) {
                        callAPI('users/me', 'GET', '', token)
                            .then(result => {
                                if (result.status === 200 && result.data.status) {
                                    this.props.checkAuth();
                                    localStorage.setItem('user-info', JSON.stringify(result.data.message))
                                }
                            })
                            .catch(e => {
                                localStorage.clear()
                                history.push('/login')
                            })
                    } else {
                        localStorage.clear()
                        history.push('/login')
                    }
                } catch (error) {
                    localStorage.clear()
                    history.push('/login')
                }
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.auth) {
                history.push('/login');
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }

    }

    const mapStateToProps = (state, ownProps) => {
        return {
            auth: state.auth.authenticated
        }
    }
    const mapDispatchToProps = (dispatch, ownProps) => {
        return {
            checkAuth: () => {
                dispatch({
                    type: AUTH_USER
                })
            }
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(Authentication);
}

