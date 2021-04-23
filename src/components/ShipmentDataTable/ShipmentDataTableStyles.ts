import { createStyles, StyleRules, Theme } from '@material-ui/core/styles';

const ShipmentResumeStyles = (theme: Theme): StyleRules => createStyles({
  container: {
    flexGrow: 1,
    height: '100%',
    maxHeight: '50vh',
    overflow: 'scroll',
  },
  linkContainer: {
    padding: theme.spacing(0.5, 0),
  },
  linkshipment: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.dark,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.primary.main,
    },
  },
});

export default ShipmentResumeStyles;
