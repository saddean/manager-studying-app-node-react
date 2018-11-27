import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';

const styles1 = theme => ({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.dark,
    },
    warning: {
        backgroundColor: amber[700],
        color:'black'
    },
    icon: {
        fontSize: 22,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit,
    },
    message: {
        display: 'flex',
        alignItems: 'center',
        fontSize:20
    }
});

export default styles1 ;