import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';


const styles = {
    card: {
        backgroundColor: 'white',
        borderTopLeftRadius: 120,
        borderBottomRightRadius: 120,
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },

};

class SignUp extends Component {

    onSignUp = (event) => {
        event.preventDefault();
        this.props.onSignUp();
    }

    render() {
        const { classes } = this.props;
        return (
            <form className={classes.card} onSubmit={(event)=>this.onSignUp(event)} >
                <Grid container justify="center" direction="column" alignItems="center" >
                    <Grid item xs={12}>
                        <h2>SignUp</h2>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="email"
                            label="Email"
                            margin="normal"
                            style={{ width: 500 }}
                            value={this.props.email}
                            onChange={(event) => this.props.onChange(event)}
                            type="email"
                            required
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            name="name"
                            label="Tên hiển thị"
                            margin="normal"
                            style={{ width: 500 }}
                            value={this.props.name}
                            onChange={(event) => this.props.onChange(event)}
                            type="text"
                            required
                        />
                    </Grid>


                    <Grid item xs={12}>
                        <TextField
                            name="password"
                            type="password"
                            label="Pasword"
                            margin="normal"
                            style={{ width: 500 }}
                            value={this.props.password}
                            onChange={(event) => this.props.onChange(event)}
                            required
                        />
                    </Grid>

                    <Grid item xs={12} style={{ marginBottom: 35 }}>
                        <Button type="submit" disabled={this.props.isLoading} size="large" variant="extendedFab" color="primary">
                            Đồng ý
                        </Button>
                    </Grid>

                </Grid>

            </form>


        );
    }
}

export default withStyles(styles)(SignUp);