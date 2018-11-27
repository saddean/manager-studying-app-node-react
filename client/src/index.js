import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Snackbar from './components/SnackBar/SnackBar'
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import { Provider } from 'react-redux'
import store from './store'


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#039be5',
        },
        secondary: {
            main: '#d50000',
        },
        type:'light'
    },
});


ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <App />
        </Provider>

        <Provider store={store}>
            <Snackbar />
        </Provider>

    </MuiThemeProvider>


    , document.getElementById('root'));
registerServiceWorker();
