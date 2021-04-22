import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ShipmentProvider } from 'utils/context/ShipmentsContext';
import HomeContainer from 'containers/HomeContainer/HomeContainer';
import ShipmentListContainer from 'containers/ShipmentListContainer/ShipmentListContainer';
import ShipmentDetailContainer from 'containers/ShipmentDetailContainer/ShipmentDetailContainer';
import NewShipmentContainer from 'containers/NewShipmentContainer/NewShipmentContainer';
import { Switch, Route } from 'react-router-dom';

import styles from './AppStyles';

const useStyles = makeStyles(styles);

const App = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ShipmentProvider>
        <Switch>
          <Route path="/allshipments" component={ShipmentListContainer} />
          <Route path="/shipmentDetail/:id" component={ShipmentDetailContainer} />
          <Route path="/newShipment/" component={NewShipmentContainer} />
          <Route path="/" component={HomeContainer} />
        </Switch>
      </ShipmentProvider>
    </div>
  );
};

export default App;
