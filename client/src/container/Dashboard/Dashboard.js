import React, { Component } from 'react';
import Menu from '../../components/Header/Menu'
import { Route, Switch } from 'react-router-dom'
import Account from '../../components/Account/Account'
import Index from '../../components/Account/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as Snackbar from '../../actions/snackbarAction';
import { signOut } from '../../actions/authAction'

class Dashboard extends Component {

    render() {
        return (
            <div>
                <Menu signOut={this.props.signout} />
                <div className="dashboard">
                    <Switch>
                        <Route exact path="/" component={Index} />
                        <Route path="/user" component={Account} />
                    </Switch>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.auth.authenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        snackbar: bindActionCreators(Snackbar, dispatch),
        signout: bindActionCreators(signOut, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
