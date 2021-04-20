import { createStyles, StyleRules, Theme } from '@material-ui/core/styles';

const AppStyles = (theme: Theme): StyleRules => createStyles({
  root: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
  },
});

export default AppStyles;
