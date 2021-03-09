import React from 'react'
import { Grid, Paper, Typography, Slider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Highcharts from '../components/Highchart';

import PrettoSlider from '../components/PrettoSlider'
import Header from "../components/Header"
import Parameters from "../components/Parameters";

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),


        color: theme.palette.text.secondary,
    },

}));
function valuetext(value) {
    return `{value/1000}K`;
}


function spend_value() {
    const classes = useStyles();
    const [value, setValue] = React.useState([1000, 100000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (


        <div className={classes.root}>
            <Header></Header>
            <Grid style={{ marginTop: '80px' }} container spacing={3}>
                <Grid item sm={12}>


                    <Grid item container justify="center" sm={12} >


                        <Grid item  container justify="center" sm={8} spacing={2}>

                            <Grid  item container justify="center">
                                <Grid item sm={10}>
                                    <Paper className={classes.paper}>
                                        <Typography id="range-slider" gutterBottom>
                                            Total Spends
                                         </Typography>

                                        <PrettoSlider min={100} max={10000} getAriaValueText={valuetext} valueLabelDisplay="auto" defaultValue={value} />
                                    </Paper>
                                </Grid>
                                <Grid style={{marginTop:"20px"}} item sm={10}>
                                    <Paper className={classes.paper}>
                                        <Typography id="range-slider" gutterBottom>
                                            Total Transactions
                                        </Typography>
                                        <PrettoSlider min={100} max={10000} valueLabelDisplay="auto" defaultValue={value} /></Paper>
                                </Grid>
                                <Grid style={{marginTop:"20px"}} item sm={10}>
                                    <Paper className={classes.paper}>
                                        <Typography id="range-slider" >
                                            Avg.Ticket Size
                                        </Typography>
                                        <PrettoSlider min={100} max={10000} valueLabelDisplay="auto" defaultValue={value} />
                                    </Paper>
                                </Grid>
                            </Grid>


                        </Grid>


                        <Grid item sm={4}>
                            <Grid item sm={12}>

                                <Highcharts />
                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </div>


    )
}

export default spend_value
