import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

const styles = theme => ({
    card: {
        display: 'flex',
        fontWeight: "bold"
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 140,
        height: 140,
    },
    icon: {
        fontSize: 140,
        color: "white"
    }
});

class CardItems extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Card raised className={classes.card}>
                <CardMedia className={classes.cover}>
                    <i className={classNames("fa", this.props.icons, classes.icon)} style={{ backgroundColor: this.props.colorBackground, }} />
                </CardMedia>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography variant="headline display1">{this.props.heading}</Typography>
                        <Typography variant="display3" color="error">
                            {this.props.count}
                        </Typography>
                    </CardContent>
                </div>

            </Card>
        );
    }
}

export default withStyles(styles, { withTheme: true })(CardItems);