import { createStyles, StyleRules, Theme } from '@material-ui/core/styles';

const FullPageContainerStyles = (theme: Theme): StyleRules => createStyles({
  container: {
    padding: theme.spacing(2),
    flex: 1,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 'bold',
  },
});

export default FullPageContainerStyles;
