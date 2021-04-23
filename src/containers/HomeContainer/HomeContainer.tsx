import React, { useEffect } from 'react';
import LoaderComponent from 'components/LoaderComponent/LoaderComponent';
import ShipmentResume from 'components/ShipmentResume/ShipmentResume';
import ShipmentDataTable from 'components/ShipmentDataTable/ShipmentDataTable';
import FullPageContainer from 'components/FullPageContainer/FullPageContainer';
import { useShipmentContext } from 'utils/context/ShipmentsContext';
import {
  Button, makeStyles, Typography,
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';
import { API_URL } from 'utils/constants';
import DataHook from 'utils/DataHook';

import styles from './HomeContainerStyles';

const useStyles = makeStyles(styles);

/**
 * Homepage container, uses the DataHook to recieve always data.
 */
const HomeContainer = (): JSX.Element => {
  const { isLoading, response, error } = DataHook({ url: `${API_URL}alldata`, dataKey: 'homeData' });
  const classes = useStyles();
  const {
    state: {
      shipmentsInTransit,
      shipmentsDelivered,
      shipmentsCancelled,
      shipmentsFullList,
    },
    dispatch,
  } = useShipmentContext();

  useEffect(() => {
    if (response && response?.length > 0) {
      dispatch({
        type: 'SET_DATA',
        data: response,
      });
    }
  }, [response]);

  if (isLoading) {
    return <LoaderComponent />;
  }

  // Nice to have snackbar for this and error type show
  if (error) {
    return <>THERE WAS A MISTAKE</>;
  }

  return (
    <FullPageContainer title="Latest Shipments">
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
    </FullPageContainer>
  );
};

export default HomeContainer;
