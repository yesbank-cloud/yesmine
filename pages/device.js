import React from 'react'
import { Grid, Paper, Typography, Slider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Highcharts from '../components/Highchart';
import Parameters from "../components/Parameters";
import Header from "../components/Header"
const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        borderWidth:'2px',
        borderColor: '#2377b8',
        color: theme.palette.text.secondary,
    },

}));

function device() {
    const classes = useStyles();
    return (
        <>
            <Header></Header>
             <div style={{marginTop:'100px'}}>
            
            <Grid container justify="center" spacing={2}>
            <Grid container justify="center" item md={7}>
                    <Grid  container direction="column"  item md={4}>
                        <Paper style={{marginTop:'30px'}} variant="outlined" align="center" className={classes.paper}>

                            <Typography color="textPrimary" gutterBottom>
                                Premium Phone
                            </Typography>
                        </Paper>
                        <Paper style={{marginTop:'30px'}} variant="outlined" align="center" className={classes.paper}>

                            <Typography color="textPrimary" gutterBottom>
                                Non Premium Phone  
                            </Typography>
                        </Paper>

                     
                    </Grid>


                </Grid>
                <Grid item md={4}>

                
                    <Highcharts></Highcharts>



                </Grid>


            </Grid>

        </div>
        </>


       
    )
}

export default device
