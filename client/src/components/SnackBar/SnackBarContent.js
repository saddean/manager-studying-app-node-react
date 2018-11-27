import React, { Component } from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { withStyles } from '@material-ui/core/styles';
import style1 from './styles1'
import classNames from 'classnames';

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};



class SnackBarContent extends Component {

    render() {
        const { classes,message, variant } = this.props;
        const Icon = variantIcon[variant];

        return (
            <SnackbarContent
                className={classes[variant]}
                aria-describedby="client-snackbar"
                message={
                    <span id="client-snackbar" className={classes.message}>
                        <Icon className={classNames(classes.icon, classes.iconVariant)} />
                        {message}
                    </span>
                }
                action={[
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={()=>this.props.onClose()}
                    >
                        <CloseIcon/>
                    </IconButton>,
                ]}
            />
        );
    }
}

export default withStyles(style1)(SnackBarContent);