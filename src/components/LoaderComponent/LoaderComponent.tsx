import React from 'react';
import {
  CircularProgress, makeStyles,
} from '@material-ui/core';

import styles from './LoaderComponentStyles';

const useStyles = makeStyles(styles);

const AppBarComponent = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.loaderContainer}>
      <CircularProgress className={classes.spiner} />
    </div>
  );
};

export default AppBarComponent;
