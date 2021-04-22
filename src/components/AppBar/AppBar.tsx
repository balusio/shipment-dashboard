import React from 'react';
import {
  AppBar, Toolbar, Typography, Button, makeStyles,
} from '@material-ui/core';
import Logo from 'assets/img/logixboard-logo.png';
import { Link } from 'react-router-dom';
import styles from './AppBarStyles';

const useStyles = makeStyles(styles);

const AppBarComponent = (): JSX.Element => {
  const classes = useStyles();

  return (
    <AppBar position="static" classes={{ root: classes.appBarRoot }}>
      <Toolbar>
        <Link to="/">
          <img src={Logo} alt="logo" className={classes.img} />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
