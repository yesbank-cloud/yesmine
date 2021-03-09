import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: 0,
        minWidth: 200,
        color:'red'
    },
    selectEmpty: {
        // marginTop: theme.spacing(2),
    },
}));

function Parameters() {
    const classes = useStyles();
    const [period, setPeriod] = React.useState('1');
  
    const handleChange = (event) => {
      setPeriod(event.target.value);
    };
  
    return (
        <div>
            
                <FormControl variant="outlined" className={classes.formControl} size="small">
                    <InputLabel id="demo-simple-select-outlined-label">Period</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={period}
                        onChange={handleChange}
                        label="Period"
                    >
                        {/* <MenuItem value="">
                            <em>None</em>
                        </MenuItem> */}
                        <MenuItem value={1}>1 Month</MenuItem>
                        <MenuItem value={3}>3 Months</MenuItem>
                        <MenuItem value={6}>6 Months</MenuItem>
                    </Select>
                </FormControl>
            
        </div>
    )
}

export default Parameters
