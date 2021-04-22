import { createStyles, StyleRules, Theme } from '@material-ui/core/styles';

const ShipmentListContainerStyles = (theme: Theme): StyleRules => createStyles({
  container: {
    padding: theme.spacing(2),
    flex: 1,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'scroll',
  },
  title: {
    fontWeight: 'bold',
    margin: theme.spacing(2, 0),
  },
  tableHead: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.common.white,
    padding: theme.spacing(1),
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

export default ShipmentListContainerStyles;
