import  {Slider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const PrettoSlider = withStyles({
    root: {
        color: '#2377b8',
        height: 6,
    },
    thumb: {
        height: 16,
        width: 16,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -6,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 0px)',
    },
    track: {
        height: 4,
        borderRadius: 4,
    },
    rail: {
        height: 4,
        borderRadius: 4,
    },
})(Slider);


export default PrettoSlider;