import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

import styles from './ShipmentResumeStyles';

const useStyles = makeStyles(styles);

type ShipmentResumeProps = {
  shipmentsDelivered?: number;
  shipmentsCancelled?: number;
  shipmentsInTransit?: number;
};
/**
 * Show the quantity shipments on status Canceller, In Transit or Delivered
 */
const ShipmentResume = ({
  shipmentsDelivered = 0,
  shipmentsCancelled = 0,
  shipmentsInTransit = 0,
} : ShipmentResumeProps): JSX.Element => {
  const classes = useStyles(styles);

  return (
    <div className={classes.container}>
      <div className={classes.itemQuantity}>
        <Typography variant="h3" className={classes.delivered}>
          {shipmentsDelivered}
        </Typography>
        <Typography variant="subtitle1">
          Delivered
        </Typography>
      </div>
      <div className={classes.itemQuantity}>
        <Typography variant="h3" className={classes.inTransit}>
          {shipmentsInTransit}
        </Typography>
        <Typography variant="subtitle1">
          In Transit
        </Typography>
      </div>
      <div className={classes.itemQuantity}>
        <Typography variant="h3" className={classes.cancelled}>
          {shipmentsCancelled}
        </Typography>
        <Typography variant="subtitle1">
          Cancelled
        </Typography>
      </div>

    </div>
  );
};

export default ShipmentResume;
