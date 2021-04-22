import { createStyles, StyleRules } from '@material-ui/core/styles';

const AppStyles = (): StyleRules => createStyles({
  loaderContainer: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
  },
  spiner: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    margin: 'auto',
  },
});

export default AppStyles;
