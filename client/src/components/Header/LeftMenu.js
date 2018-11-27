import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person'
import HomeIcon from '@material-ui/icons/Home'
import { Link } from 'react-router-dom'
class LeftMenu extends Component {
    render() {
        return (
            <Drawer anchor="left" open={this.props.open} onClose={() => this.props.changeLeftMenu()} >
                <List component="nav">
                    <ListItem button onClick={() => this.props.changeLeftMenu()}>
                        <ListItemIcon>
                            <MenuIcon />
                        </ListItemIcon>
                    </ListItem>

                    <ListItem button component={Link} to="/">
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Trang chủ" />
                    </ListItem>

                    <ListItem button component={Link} to="/user">
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tài khoản" />
                    </ListItem>
                </List>
            </Drawer>
        );
    }
}


export default LeftMenu;