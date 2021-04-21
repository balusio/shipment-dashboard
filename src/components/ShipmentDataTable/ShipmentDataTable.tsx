import React from 'react';
import {
  Table, TableCell, TableBody, TableContainer,
  TableRow, TableHead, makeStyles, Button
} from '@material-ui/core';
import { useShipmentContext } from 'utils/context/ShipmentsContext';
import { ShipmentObject } from 'utils/types';
import styles from './ShipmentDataTableStyles';

const useStyles = makeStyles(styles);

const ShipmentDataTable = (): JSX.Element => {
  const classes = useStyles(styles);
  const { state: { shipmentsList } } = useShipmentContext();
  const tableRows = shipmentsList.splice(0, 10);
  return (
    <div className={classes.container}>
      <TableContainer>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Client Name</TableCell>
              <TableCell align="left">Destination</TableCell>
              <TableCell align="left">Mode</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRows.map(({
              'Shipment ID': shipmentID,
              Destination,
              'Client Name': clientName,
              Mode,
              Status,
            }: ShipmentObject) => (
              <TableRow key={shipmentID}>
                <TableCell>
                  {clientName}
                </TableCell>
                <TableCell>
                  {Destination}
                </TableCell>
                <TableCell>
                  {Mode}
                </TableCell>
                <TableCell>
                  {Status}
                </TableCell>
                <TableCell>
                  <Button color="primary">
                    Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ShipmentDataTable;