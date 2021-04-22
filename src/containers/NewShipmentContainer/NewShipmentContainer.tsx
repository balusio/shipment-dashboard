import React, { useEffect, useState } from 'react';
import AppBar from 'components/AppBar/AppBar';
import { FullShipmentObject } from 'utils/types';
import {
  Button, makeStyles, MenuItem, TextField, Typography,
} from '@material-ui/core';
import { useShipmentContext } from 'utils/context/ShipmentsContext';
import ModeTransportIcon from 'components/ModeTransportIcon/ModeTransportIcon';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import styles from './NewShipmentContainerStyles';

const useStyles = makeStyles(styles);

const NewShipmentContainer = (): JSX.Element => {
  const classes = useStyles();
  const { dispatch } = useShipmentContext();
  const [formObject, serFormObject] = useState<FullShipmentObject>({
    // create a custom hash or send the ID generator on the backend
    'Shipment ID': `${new Date()}-12344-6789-1211-124-blah-blah-blah`,
    'Client Name': '',
    Origin: '',
    Destination: '',
    Mode: '',
    'Estimated Departure': `${new Date()}`,
    'Estimated Arrival': `${new Date()}`,
    Status: '',
  });
  const handleChange = (e: HTMLInputElement | any) => {
    serFormObject({
      ...formObject,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (typeDate: keyof FullShipmentObject, date: string) => {
    serFormObject({
      ...formObject,
      [typeDate]: date.toString(),
    });
  };

  const setNewShipment = () => dispatch({
    type: 'ADD_SHIPMENT',
    data: formObject,
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <AppBar />
      <div className={classes.container}>
        <Typography variant="h3" className={classes.title}>
          New Shipment:
        </Typography>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              name="Client Name"
              label="Client Name"
              multiline
              rowsMax={4}
              value={formObject['Client Name']}
              onChange={handleChange}
            />
            <TextField
              name="Origin"
              label="Origin"
              multiline
              rowsMax={4}
              value={formObject.Origin}
              onChange={handleChange}
            />
            <TextField
              name="Destination"
              label="Destination"
              multiline
              rowsMax={4}
              value={formObject.Destination}
              onChange={handleChange}
            />

          </div>
          <div>
            <TextField
              select
              label="Mode Transport"
              name="Mode"
              value={formObject.Mode}
              onChange={handleChange}
              rowsMax={4}
              helperText="shipment travel Mode"
            >
              <MenuItem key="sea" value="Sea">
                Sea <ModeTransportIcon Mode="Sea" />
              </MenuItem>
              <MenuItem key="rail" value="Rail">
                Rail <ModeTransportIcon Mode="Rail" />
              </MenuItem>
              <MenuItem key="Air" value="Air">
                Air <ModeTransportIcon Mode="Air" />
              </MenuItem>
              <MenuItem key="Other" value="Other">
                Other
              </MenuItem>
            </TextField>
            <TextField
              name="Status"
              label="Status"
              multiline
              rowsMax={4}
              value={formObject.Status}
              onChange={handleChange}
            />
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              label="Estimated Departure"
              value={formObject['Estimated Departure']}
              onChange={(date) => date && handleDateChange('Estimated Departure', date.toString())}

            />
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              label="Estimated arrival"
              value={formObject['Estimated Arrival']}
              onChange={(date) => date && handleDateChange('Estimated Arrival', date.toString())}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </div>
        </form>
        <Button
          onClick={setNewShipment}
          classes={{
            root: classes.linkshipment,
          }}
          variant="contained"
        >
          Create new Shipment
        </Button>
      </div>
    </MuiPickersUtilsProvider>
  );
};

export default NewShipmentContainer;
