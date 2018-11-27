import React, { Component } from 'react';
import CardItems from '../Card/CardItems'
import Grid from '@material-ui/core/Grid';
import SimpleLineChart from '../Chart/SimpleLineChart'
import Typography from '@material-ui/core/Typography';
class index extends Component {
    render() {
        return (
            <div style={{marginTop:50}}>
                <Grid container spacing={24}>
                <Grid item xs={3} md={3} sm={12}  >
                        <CardItems
                            colorBackground="#DA0B47"
                            icons="fa-home"
                            heading="Home"
                            count="100"
                        />
                    </Grid>

                    <Grid item xs={3} md={3} sm={12} >
                        <CardItems
                            colorBackground="#0B8708"
                            icons="fa-user"
                            heading="Người dùng"
                            count="100"
                        />
                    </Grid>

                    <Grid item xs={3} md={3} sm={12}>
                        <CardItems
                            colorBackground="#0F78AB"
                            icons="fa-facebook"
                            heading="Người dùng"
                            count="100"
                        />
                    </Grid>

                    <Grid item xs={3} md={3} sm={12}>
                        <CardItems
                            colorBackground="#464B76"
                            icons="fa-shopping-cart"
                            heading="Người dùng"
                            count="100"
                        />
                    </Grid>

                </Grid>
                <Typography component="div" style={{ marginTop: 150 }}>
                    <SimpleLineChart />
                </Typography>
            </div>
        );
    }
}

export default index; 