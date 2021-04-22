import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import AppBar from 'components/AppBar/AppBar';
import { FullShipmentObject } from 'utils/types';
import {
  Button, Card, CardActions, CardContent, CardHeader, Grid, makeStyles, Typography,
} from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import { useShipmentContext } from 'utils/context/ShipmentsContext';
import ModeTransportIcon from 'components/ModeTransportIcon/ModeTransportIcon';

import styles from './ShipmentDetailStyles';

const useStyles = makeStyles(styles);

const ShipmentDetailContainer = (): JSX.Element | null => {
  const classes = useStyles();
  const { id } = useParams<Record<string, any>>();
  const { state: { shipmentsFullList } } = useShipmentContext();

  const [shipment, setShipment] = useState<FullShipmentObject | null>(null);

  useEffect(() => {
    if (shipmentsFullList.length <= 0) {
      axios.get(`http://localhost:8080/shipment/${id}`)
        .then(({ data }: AxiosResponse) => {
          setShipment(data[0]);
        });
    } else {
      const currentShipment = shipmentsFullList
        .filter(({ 'Shipment ID': ShipId }: FullShipmentObject) => ShipId === id)
        .reduce((elem: FullShipmentObject) => elem);
      setShipment(currentShipment);
    }
  }, []);
  if (!shipment) {
    return null;
  }
  const {
    'Shipment ID': shipmentID,
    Origin,
    Destination,
    'Client Name': clientName,
    'Estimated Arrival': EstArrival,
    'Estimated Departure': EstDeparture,
    Mode,
    Status,
  } = shipment;

  const daysLeft = () => {
    const date1 = new Date(EstDeparture);
    const date2 = new Date(EstArrival);
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  return (
    <>
      <AppBar />
      <div className={classes.container}>
        <Typography variant="h4">
          Shipment from: <strong> {clientName} </strong>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Card
              classes={{
                root: classes.card,
              }}
            >
              <CardHeader
                title="Shipment ID"
              />
              <CardContent>
                <Typography>{shipmentID}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              classes={{
                root: classes.card,
              }}
            >
              <CardContent>
                <Typography variant="h2" className={classes.DaysLeft} color="textSecondary" gutterBottom>
                  {daysLeft()}
                </Typography>
              </CardContent>
              <CardActions>
                <Typography>
                  Days Until delivery
                </Typography>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              classes={{
                root: classes.card,
              }}
            >
              <CardContent>
                <Typography variant="h2" className={classes.DaysLeft} color="textSecondary" gutterBottom>
                  <ModeTransportIcon
                    fontSize="large"
                    color="primary"
                    Mode={Mode}
                  />
                </Typography>
              </CardContent>
              <CardActions>
                <Typography>
                  Tranported via: {Mode}
                </Typography>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              classes={{
                root: classes.card,
              }}
            >
              <CardHeader
                title="Departure"
              />
              <CardContent>
                <Typography>
                  {Origin}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              classes={{
                root: classes.card,
              }}
            >
              <CardHeader
                title="Arrival"
              />
              <CardContent>
                <Typography>
                  {Destination}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Button
          classes={{
            root: classes.linkshipment,
          }}
          component={Link}
          to="/allshipments"
          variant="contained"
        >
          Back to List
        </Button>
      </div>
    </>
  );
};

export default ShipmentDetailContainer;
