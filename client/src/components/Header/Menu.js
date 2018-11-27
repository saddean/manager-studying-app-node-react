import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import LeftMenu from './LeftMenu';

const styles = {
    root: {
        flexGrow: 1,
        zIndex: 1,
        position: 'relative',
        display: 'flex',
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    }
};

class Menu extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            menuLeft: false
        }
    }
    changeLeftMenu = () => {
        this.setState({ menuLeft: !this.state.menuLeft })
    }

    render() {
        return (
            <div style={styles.root}>
                <AppBar position="static" >
                    <Toolbar >
                        <IconButton color="inherit" style={styles.menuButton} onClick={() => this.changeLeftMenu()}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" style={styles.flex}>
                            Quản lí sinh viên 
                        </Typography>
                        <Button color="inherit" onClick={this.props.signOut}>Logout</Button>
                    </Toolbar>
                </AppBar>
                <LeftMenu open={this.state.menuLeft} changeLeftMenu={this.changeLeftMenu} />
            </div>
        );
    }
}

export default (Menu);