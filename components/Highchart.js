import React from 'react'
import { Grid, Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        height:"80%",
        position:'fixed',
        paddingTop:"5%",
        color: theme.palette.text.secondary,
    },

}));
function Highchart() {
    const classes = useStyles();
    const options = {
        chart: {
            type: 'pie',
            width:'400',
            height:'400'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false
                }
            }
        },
        colors: ['grey', '#2377b8', '#8bbc21', '#910000', '#1aadce',
            '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'],
        title: {
            verticalAlign: 'middle',
    floating: true,
            text: '100000 Users'
        },

        series: [{
            innerSize: '80%',
            data: [{
                name: 'Meets Criteria',
                y: 60
            }, {
                name: "Doesn't Meet",
                y: 40
            },]
        }]
    }
    return (
        
            <Paper align="center" className={classes.paper} >
                                    <HighchartsReact
                                        highcharts={Highcharts}
                                        options={options}
                                    />
                                </Paper>
        
    )
}

export default Highchart
