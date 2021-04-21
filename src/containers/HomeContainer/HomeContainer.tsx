import React, { useEffect } from 'react';
import AppBar from 'components/AppBar/AppBar';
import axios, { AxiosResponse } from 'axios';
import ShipmentResume from 'components/ShipmentResume/ShipmentResume';
import ShipmentDataTable from 'components/ShipmentDataTable/ShipmentDataTable';
import { useShipmentContext } from 'utils/context/ShipmentsContext';
import { Button, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import styles from './HomeContainerStyles';

const useStyles = makeStyles(styles);

const HomeContainer = (): JSX.Element => {
  const classes = useStyles();
  const {
    state: {
      shipmentsInTransit, shipmentsDelivered, shipmentsCancelled, shipmentsList,
    },
    dispatch,
  } = useShipmentContext();

  useEffect(() => {
    axios.get('http://localhost:8080/data')
      .then(({ data }: AxiosResponse) => {
        dispatch({
          type: 'SET_DATA',
          data,
        });
      });
  }, []);

  return (
    <>
      <AppBar />
      <div className={classes.container}>
        <Typography variant="h2" className={classes.title}>
          Latest shipments
        </Typography>
        <ShipmentResume
          {...{
            shipmentsInTransit,
            shipmentsDelivered,
            shipmentsCancelled,
          }}
        />
        <ShipmentDataTable />
        <Button>
          <Link to="/allshipments">See all Shipments</Link>
        </Button>
        <Typography variant="body2" className={classes.totalShipments}>
          total Shipments:
          <strong>{ shipmentsList.length }</strong>
        </Typography>
      </div>
    </>
  );
};

export default HomeContainer;
