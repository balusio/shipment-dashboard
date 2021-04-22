import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import AppBar from 'components/AppBar/AppBar';
import { FullShipmentObject } from 'utils/types';
import {
  Button, makeStyles, Typography, TableRow,
  Table, TableCell, TableBody, TableContainer, TableHead, TableCellProps,
} from '@material-ui/core';
import TableModeCell from 'components/ModeTransportIcon/ModeTransportIcon';
import { Link, NavLink } from 'react-router-dom';
import { useShipmentContext } from 'utils/context/ShipmentsContext';

import styles from './ShipmentListContainerStyles';
import ModeTransportIcon from 'components/ModeTransportIcon/ModeTransportIcon';

const useStyles = makeStyles(styles);

const ShipmentListContainer = (): JSX.Element => {
  const classes = useStyles();
  const {
    state: {
      shipmentsFullList,
    },
    dispatch,
  } = useShipmentContext();

  // this component could be manually styled in order to avoid
  // rerenders and redeclare a simple component with styling
  const StyledTableCell = ({ children, ...props }: TableCellProps): JSX.Element => (
    <TableCell classes={{ head: classes.tableHead }} {...props}>{children}</TableCell>
  );

  useEffect(() => {
    if (shipmentsFullList.length <= 0) {
      axios.get('http://localhost:8080/alldata')
        .then(({ data }: AxiosResponse) => {
          dispatch({
            type: 'SET_FULLSHIPMENTS',
            data,
          });
        });
    }
  }, []);

  return (
    <>
      <AppBar />
      <div className={classes.container}>
        <Typography variant="h3" className={classes.title}>
          All Shipments
        </Typography>
        <TableContainer>
          <Table
            stickyHeader
            className={classes.table}
            aria-label="customized table"
          >
            <TableHead className={classes.tableHeader}>
              <TableRow>
                <StyledTableCell>Client Name</StyledTableCell>
                <StyledTableCell>Origin</StyledTableCell>
                <StyledTableCell align="left">Destination</StyledTableCell>
                <StyledTableCell align="left">Mode</StyledTableCell>
                <StyledTableCell align="left">Status</StyledTableCell>
                <StyledTableCell align="left">Estimated Departure</StyledTableCell>
                <StyledTableCell align="left">Estimated Arrival</StyledTableCell>
                <StyledTableCell align="left">Details</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {shipmentsFullList.map(({
                'Shipment ID': shipmentID,
                Origin,
                Destination,
                'Client Name': clientName,
                'Estimated Arrival': EstArrival,
                'Estimated Departure': EstDeparture,
                Mode,
                Status,
              }: FullShipmentObject) => (
                <TableRow key={shipmentID}>
                  <TableCell>
                    {clientName}
                  </TableCell>
                  <TableCell>
                    {Origin}
                  </TableCell>
                  <TableCell>
                    {Destination}
                  </TableCell>
                  <TableCell>
                    <ModeTransportIcon Mode={Mode} />
                  </TableCell>
                  <TableCell>
                    {Status}
                  </TableCell>
                  <TableCell>
                    {EstDeparture}
                  </TableCell>
                  <TableCell>
                    {EstArrival}
                  </TableCell>
                  <TableCell>
                    <Button
                      classes={{
                        root: classes.linkshipment,
                      }}
                      component={NavLink}
                      to={`/shipmentDetail/${shipmentID}`}
                      variant="contained"
                    >
                      detail
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div>
          <Button
            classes={{
              root: classes.linkshipment,
            }}
            component={Link}
            to="/newShipment"
            variant="contained"
          >
            New Shipment
          </Button>
        </div>
      </div>
    </>
  );
};

export default ShipmentListContainer;
