import React from 'react';
import { makeStyles } from '@material-ui/core';
import HomeContainer from 'containers/HomeContainer/HomeContainer';
import { ShipmentProvider } from 'utils/context/ShipmentsContext';

import styles from './AppStyles';

const useStyles = makeStyles(styles);

const App = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ShipmentProvider>
        <HomeContainer />
      </ShipmentProvider>
    </div>
  );
};

export default App;
