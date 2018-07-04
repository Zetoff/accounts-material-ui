import { green, amber } from '@material-ui/core/colors';

export default theme => ({
  closeIcon: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
  warning: {
    backgroundColor: amber[700]
  },
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
});
