import React, { useEffect } from 'react';
import AppBar from 'components/AppBar/AppBar';
import axios, { AxiosResponse } from 'axios';
import { useShipmentContext } from 'utils/context/ShipmentsContext';
import { Button, makeStyles, Typography } from '@material-ui/core';

import styles from './ShipmentListContainerStyles';

const useStyles = makeStyles(styles);

const ShipmentListContainer = (): JSX.Element => {
  const classes = useStyles();
  const {
    state: {
      shipmentsList,
    },
    dispatch,
  } = useShipmentContext();

  useEffect(() => {
    axios.get('http://localhost:8080/alldata')
      .then(({ data }: AxiosResponse) => {
        // dispatch({
        //   type: 'SET_DATA',
        //   data,
        // });
        console.log(data);
      });
  }, []);

  return (
    <>
      <AppBar />
      <div className={classes.container}>
        <Typography variant="h2" className={classes.title}>
          Shipments HELLO
        </Typography>
        {/* <ShipmentDataTable /> */}
      </div>
    </>
  );
};

export default ShipmentListContainer;
