import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import SnackBarContent from './SnackBarContent'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as SnackBarAction from '../../actions/snackbarAction'

class SnackBar extends Component {

    render() {
        return (
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={this.props.open}
                message={this.props.message}
                autoHideDuration={60000}
                onClose={this.props.actions.closeSnackbar}
            >
                <SnackBarContent
                    variant={this.props.variant}
                    message={this.props.message}
                    onClose={this.props.actions.closeSnackbar}
                />
            </Snackbar>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        open: state.snackbar.status,
        message: state.snackbar.message,
        variant: state.snackbar.variant,
        time: state.snackbar.time
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(SnackBarAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SnackBar)