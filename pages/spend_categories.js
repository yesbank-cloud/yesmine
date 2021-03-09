import { useEffect, useState } from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { Grid, Typography, Paper, Fab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Header from "../components/Header"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PrettoSlider from '../components/PrettoSlider'
import Icon from '@material-ui/core/Icon';

import Highcharts from "../components/Highchart"



import ProgressBar from 'react-customizable-progressbar'

// import categories from "../configs/categories";
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

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('http://www.json-generator.com/api/json/get/bHwsENNyHm?indent=2')
    const value = await res.json()

    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            value,
        },
    }
}



function spend_categories({ value }) {
    console.log(value)
    const classes = useStyles();
    // const [value, setValue] = useState([]);
    const [categories, setCategories] = useState(value)
    console.log(categories)

    const handleChange = (event, newValue) => {
        console.log(event);
        // setCategories()
        // console.log()
    };
    useEffect(() => {
        fetch("http://www.json-generator.com/api/json/get/bHwsENNyHm?indent=2")
            .then(res => res.json())
            .then(
                (result) => {
                    // setCategories(result);
                    console.log(result)

                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {

                }
            )
    }, []
    )


    return (
        <div className={classes.root}>
            <Header></Header>
            <Grid style={{marginTop:'80px'}}  container spacing={3}>
                <Grid item md={12}>
                    {/* <Grid item md={12}>
                        <Paper className={classes.paper}>
                            <Fab variant="extended" color="primary" aria-label="add" >

                                Extended
        </Fab>


                        </Paper>
                    </Grid> */}
                    
                    
                    <Grid item container justify="center" md={12} >


                        <Grid item container justify="center" md={8} spacing={2}>
                            {
                                Object.keys(categories).map((category, i) => (

                                    <Grid key={i} item md={10}>



                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-label="Expand"
                                                aria-controls="additional-actions1-content"
                                                id="additional-actions1-header"
                                            >
                                                <Grid container alignItems="center" justify="space-between"  >
                                                    <Grid container direction="column" alignItems="center" item md={2}>
                                                        <Icon style={{ color: '#2377b8' }} >{categories[category].icon}</Icon>
                                                        <Typography align="center" color="textPrimary" >{categories[category].label}</Typography>

                                                    </Grid>
                                                    <Grid container item md={8} justify="space-between">
                                                        <Grid md={2} item>
                                                            <Typography color="textPrimary" id="lol" >Amount</Typography>
                                                        </Grid>
                                                        <Grid md={10} item style={{ paddingRight: "3%" }}>
                                                            <PrettoSlider
                                                                step={1000}
                                                                aria-labelledby="lol"
                                                                min={categories[category].amount[0]}
                                                                max={categories[category].amount[1]}
                                                                onChange={handleChange}
                                                                getAriaValueText={valuetext} valueLabelDisplay="auto"
                                                                defaultValue={[categories[category].amount[0], categories[category].amount[1]]} />
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item md={1} alignItems="center" container  >
                                                        <ProgressBar
                                                            radius={25}
                                                            progress={60}
                                                            strokeWidth={6}
                                                            strokeColor="#5d9cec"
                                                            strokeLinecap="square"
                                                            trackStrokeWidth={6}
                                                            counterClockwise={true}
                                                        >
                                                            {/* <div className="indicator">
                                                                <div>60%</div>
                                                            </div>  */}
                                                        </ProgressBar>
                                                    </Grid>
                                                </Grid>

                                                {/* <FormControlLabel
                                            aria-label="Acknowledge"
                                            onClick={(event) => event.stopPropagation()}
                                            onFocus={(event) => event.stopPropagation()}
                                            control={<Checkbox/>}
                                            label={<PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={value} />}
                                        /> */}
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Grid container spacing={2} justify="center">

                                                    <Grid container style={{ marginLeft: "10%" }} item md={8}  >
                                                        <Grid md={2} item>
                                                            <Typography color="textPrimary" >Count</Typography>
                                                        </Grid>
                                                        <Grid md={10} item>
                                                            <PrettoSlider
                                                                min={categories[category].count[0]}
                                                                max={categories[category].count[1]}
                                                                valueLabelDisplay="auto"
                                                                defaultValue={[categories[category].count[0], categories[category].count[1]]} />
                                                        </Grid>


                                                    </Grid>

                                                    <Grid container style={{ marginLeft: "10%" }} item md={8}  >
                                                        <Grid md={2} item>
                                                            <Typography color="textPrimary" >ATS</Typography>
                                                        </Grid>
                                                        <Grid md={10} item>
                                                            <PrettoSlider
                                                                min={categories[category].ATS[0]}
                                                                max={categories[category].ATS[1]}
                                                                step={500}
                                                                valueLabelDisplay="auto"
                                                                defaultValue={[categories[category].ATS[0], categories[category].ATS[1]]} />
                                                        </Grid>


                                                    </Grid>

                                                </Grid>
                                                <Grid item md={1}>

                                                </Grid>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Grid>


                                ))
                            }


                        </Grid>


                        <Grid item md={4}>
                            <Grid item md={12}>

                                <Highcharts />
                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </div>
    )
}

export default spend_categories
