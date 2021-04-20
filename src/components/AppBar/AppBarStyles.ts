import { createStyles, StyleRules, Theme } from '@material-ui/core/styles';

const AppStyles = (theme: Theme): StyleRules => createStyles({
  appBarRoot: {
    backgroundColor: theme.palette.secondary.dark,
  },
  img: {
    width: '200px',
  },
});

export default AppStyles;
