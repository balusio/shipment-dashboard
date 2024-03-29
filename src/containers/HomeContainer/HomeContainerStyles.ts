import { createStyles, StyleRules, Theme } from '@material-ui/core/styles';

const HomeContainerStyles = (theme: Theme): StyleRules => createStyles({
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
  itemQuantity: {
    display: 'flex',
    flexDirection: 'column',
  },
  totalShipments: {
    alignSelf: 'flex-end',
  },
  linkContainer: {
    textAlign: 'right',
    padding: theme.spacing(0.5, 0),
  },
  linkshipment: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.dark,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.primary.main,
    },
  },
});

export default HomeContainerStyles;
