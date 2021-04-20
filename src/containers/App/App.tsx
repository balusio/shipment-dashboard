import React from 'react';
import { makeStyles } from '@material-ui/core';
import HomeContainer from 'containers/HomeContainer';

import styles from './AppStyles';

const useStyles = makeStyles(styles);

const App = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HomeContainer />
    </div>
  );
};

export default App;
