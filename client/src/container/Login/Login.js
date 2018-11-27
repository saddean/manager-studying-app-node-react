import React, { Component } from 'react';
import LoginComponent from '../../components/Login/Login'
import SignUpComponent from '../../components/Login/SignUp'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as SnackBarAction from '../../actions/snackbarAction'
import * as AuthAction from '../../actions/authAction'
import './login.css'

class Login extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            email: "",
            password: "",
            name: ""
        }
    }

    onChange = (event) => {
        let name = event.target.name;
        let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({
            [name]: value
        })
    }

    onLogin = () => {
        let data = { email: this.state.email, password: this.state.password };
        this.props.auth.signIn(data);
    }

    onSignUp = () => {
        let data = { email: this.state.email, password: this.state.password, name: this.state.name }
        this.props.auth.signUp(data);
        this.setState({
            email: "",
            password: "",
            name: "",
        })
    }

    changeStatus = () => {
        this.setState({
            email: "",
            password: "",
            name: ""
        })
        this.props.auth.changeStatusLogin()
    }


    render() {
        return (
            < div className='Login-component'  >
                {
                    (this.props.isLogin) ?
                        <div className="Login-form">
                            <LoginComponent
                                onOpen={this.props.snackbar.openSnackbar}
                                onChange={this.onChange}
                                onLogin={this.onLogin}
                                username={this.state.username}
                                password={this.state.password}
                                isLoading={this.props.isLoading}
                                changeStatus={this.changeStatus}
                            />
                        </div>
                        :
                        <div className="Login-form">
                            <SignUpComponent
                                onOpen={this.props.snackbar.openSnackbar}
                                onChange={this.onChange}
                                onSignUp={this.onSignUp}
                                username={this.state.username}
                                password={this.state.password}
                                name={this.state.name}
                                isLoading={this.props.isLoading}
                                changeStatus={this.changeStatus}
                            />
                        </div>
                }
            </div >


        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        open: state.snackbar.status,
        message: state.snackbar.message,
        variant: state.snackbar.variant,
        isLoading: state.auth.isLoading,
        isLogin: state.auth.isLogin,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        snackbar: bindActionCreators(SnackBarAction, dispatch),
        auth: bindActionCreators(AuthAction, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)

