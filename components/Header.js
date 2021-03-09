import headerStyles from '../styles/Header.module.css'
import { Grid, Typography, Paper, Fab, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Parameters from "../components/Parameters";
const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        minWidth: "100%",

        color: theme.palette.text.secondary,
    },

}));

function Header() {
    const classes = useStyles();
    return (
        <header style={{ width: '94%', position: 'fixed', top: 0, marginBottom: '50px' }}  >
            <Grid item md={12} style={{ marginBottom: "20px" }}>


                <Paper align="space-between" className={classes.paper}>
                    <Grid container align="space-between">
                        <Grid item md="10">
                        <Button style={{marginRight:"10px"}} variant="outlined" color="primary">
                            Credit Card
</Button>
                        <Button  style={{marginRight:"10px"}} variant="outlined" color="primary">
                            Loan
</Button>
                        <Button style={{marginRight:"10px"}} variant="outlined" color="primary">
                            Saving Account
</Button>
                        </Grid>
                        <Grid item md="2">
                        <Parameters></Parameters>
                        </Grid>
                        
                    </Grid>



                </Paper>
            </Grid>
        </header>

    )
}

export default Header
