import { useState } from 'react'
import { Grid, Typography, Paper, GridList, GridListTile, Card } from '@material-ui/core'
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


export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('http://www.json-generator.com/api/json/get/bZOeiNZoUi?indent=2')
    const banks = await res.json()

    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            banks,
        },
    }
}

function Bank({ banks }) {
    console.log(banks)
    const classes = useStyles();
    const [bankList, setBankList] = useState(banks)
    return (

        <div className={classes.root}>
             <Header></Header>
            <Grid style={{marginTop:'100px'}} container justify="center" spacing={2}>
                <Grid item md={7} >
                    
                    <GridList cellHeight={70} className={classes.gridList} cols={3} spacing={12}>
                        {bankList.map((bank) => (
                            <GridListTile key={bank.rno} cols={1 || 1}>
                                {/* <img src="https://commons.wikimedia.org/wiki/Category:Logos_of_banks_in_India#/media/File:Andhra_bank.svg"></img> */}
                                <Paper variant="outlined" align="center" className={classes.paper}>

                                    <Typography color="textPrimary" gutterBottom>
                                        {bank.bank}
                                    </Typography>
                                </Paper>
                            </GridListTile>
                        ))}
                    </GridList>




                    {/* {
                        bankList.map((bank, i) => (

                            <Paper key={i}>


                                {bank.bank}
                            </Paper>
                        ))
                    } */}


                </Grid>
                <Grid item md={4}>
                
                
                    <Highcharts></Highcharts>
                
                

                </Grid>
                


            </Grid>

        </div>
    )
}


export default Bank
