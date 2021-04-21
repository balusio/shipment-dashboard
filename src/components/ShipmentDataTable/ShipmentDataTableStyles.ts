import { createStyles, StyleRules, Theme } from '@material-ui/core/styles';

const ShipmentResumeStyles = (theme: Theme): StyleRules => createStyles({
  container: {
    flexGrow: 1,
    height: '100%',
    maxHeight: '50vh',
    overflow: 'scroll',
  },
});

export default ShipmentResumeStyles;
