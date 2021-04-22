import React, { useEffect } from 'react';
import AppBar from 'components/AppBar/AppBar';
import axios, { AxiosResponse } from 'axios';
import ShipmentResume from 'components/ShipmentResume/ShipmentResume';
import ShipmentDataTable from 'components/ShipmentDataTable/ShipmentDataTable';
import { useShipmentContext } from 'utils/context/ShipmentsContext';
import { Button, makeStyles, Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';
import { API_URL } from 'utils/constants';

import styles from './HomeContainerStyles';

const useStyles = makeStyles(styles);

const HomeContainer = (): JSX.Element => {
  const classes = useStyles();
  const {
    state: {
      shipmentsInTransit,
      shipmentsDelivered,
      shipmentsCancelled,
      shipmentsLatestList,
      shipmentsFullList,
    },
    dispatch,
  } = useShipmentContext();

  useEffect(() => {
    if (shipmentsLatestList.length <= 0) {
      axios.get(`${API_URL}data`)
        .then(({ data }: AxiosResponse) => {
          dispatch({
            type: 'SET_DATA',
            data,
          });
        });
    }
  }, [shipmentsFullList]);

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
        <div className={classes.linkContainer}>
          <Button
            classes={{
              root: classes.linkshipment,
            }}
            component={Link}
            to="/allshipments"
            variant="contained"
          >
            See all Shipments
            <ArrowForwardIcon className={classes.linkIcon} />
          </Button>
        </div>

        <Typography variant="body2" className={classes.totalShipments}>
          total Shipments:
          <strong>{ shipmentsFullList.length }</strong>
        </Typography>
      </div>
    </>
  );
};

export default HomeContainer;
