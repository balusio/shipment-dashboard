import { createStyles, StyleRules, Theme } from '@material-ui/core/styles';

const ShipmentResumeStyles = (theme: Theme): StyleRules => createStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '70%',
    width: '100%',
    margin: '20px auto',
  },
  title: {
    fontWeight: 'bold',
  },
  delivered: {
    color: theme.palette.primary.main,
  },
  inTransit: {
    color: theme.palette.warning.dark,
  },
  cancelled: {
    color: theme.palette.error.dark,
  },
});

export default ShipmentResumeStyles;
