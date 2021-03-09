import React from 'react'
import { Grid, Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Parameters from "../components/Parameters";
import Highcharts from '../components/Highchart';
import Header from "../components/Header"
const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },
    paper: {
        borderWidth:'2px',
        padding: theme.spacing(2),
        marginTop:'30px',
        borderColor: '#2377b8',
        color: theme.palette.text.secondary,
    },

}));
var data = [
    ['madhya pradesh', 0],
    ['uttar pradesh', 1],
    ['karnataka', 2],
    ['nagaland', 3],
    ['bihar', 4],
    ['lakshadweep', 5],
    ['andaman and nicobar', 6],
    ['assam', 7],
    ['west bengal', 8],
    ['puducherry', 9],
    ['daman and diu', 10],
    ['gujarat', 11],
    ['rajasthan', 12],
    ['dadara and nagar havelli', 13],
    ['chhattisgarh', 14],
    ['tamil nadu', 15],
    ['chandigarh', 16],
    ['punjab', 17],
    ['haryana', 18],
    ['andhra pradesh', 19],
    ['maharashtra', 20],
    ['himachal pradesh', 21],
    ['meghalaya', 22],
    ['kerala', 23],
    ['telangana', 24],
    ['mizoram', 25],
    ['tripura', 26],
    ['manipur', 27],
    ['arunanchal pradesh', 28],
    ['jharkhand', 29],
    ['goa', 30],
    ['nct of delhi', 31],
    ['odisha', 32],
    ['jammu and kashmir', 33],
    ['sikkim', 34],
    ['uttarakhand', 35]
];
function city() {
    const options = {
        chart: {
            map: 'countries/in/custom/in-all-disputed'
        },

        title: {
            text: 'Total Users'
        },
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        subtitle: {
            text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/in/custom/in-all-disputed.js">India with disputed territories</a>'
        },

        colorAxis: {
            min: 0
        },

        series: [{
            data: data,
            name: 'Random data',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    }
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
                                All Cities
                            </Typography>
                        </Paper>
                        <Paper style={{marginTop:'30px'}} variant="outlined" align="center" className={classes.paper}>

                            <Typography color="textPrimary" gutterBottom>
                                Targetable Cities
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

export default city
