import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
const PurpleButton = withStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    padding: '15px 80px',
        marginTop: theme.spacing(4),
   
    textTransform: 'uppercase',
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(Button);

export default PurpleButton
